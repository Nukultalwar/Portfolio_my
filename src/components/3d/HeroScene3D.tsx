import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import FloatingCanvasFallback from './FloatingCanvasFallback';

export const HeroScene3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isLowPower, setIsLowPower] = useState<boolean>(false);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // Check low power / mobile device heuristic
    if (window.innerWidth < 640) {
      // Mobile screen: will still render with reduced particle count
      setIsLowPower(true);
    }

    const container = containerRef.current;
    if (!container) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    
    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    // RENDERER
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch {
      setHasWebGL(false);
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // GROUP FOR ALL 3D ELEMENTS
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. CORE GEOMETRIC OBJECT: Icosahedron with Wireframe Overlay
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0e2444,
      metalness: 0.85,
      roughness: 0.15,
      transmission: 0.6,
      thickness: 1.2,
      reflectivity: 0.9,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // 2. INNER GLOWING WIREFRAME
    const wireGeometry = new THREE.IcosahedronGeometry(1.62, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    mainGroup.add(wireMesh);

    // 3. INNER PULSING DATA CORE
    const innerGeo = new THREE.OctahedronGeometry(0.85, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x818cf8,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.9,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 4. ORBITAL RINGS
    const ringGeometry = new THREE.TorusGeometry(2.35, 0.022, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65,
    });
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeometry2 = new THREE.TorusGeometry(2.65, 0.018, 16, 100);
    const ringMaterial2 = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = Math.PI / 6;
    mainGroup.add(ring2);

    // 5. ORBITING SATELLITE NODES (Tech Nodes)
    const nodeCount = 4;
    const nodes: THREE.Mesh[] = [];
    const nodeGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.8,
      roughness: 0.1
    });

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      mainGroup.add(node);
      nodes.push(node);
    }

    // 6. FLOATING TECH PARTICLE CLOUD
    const particleCount = isLowPower ? 90 : 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x38bdf8); // Cyan
    const color2 = new THREE.Color(0x818cf8); // Indigo
    const color3 = new THREE.Color(0xc084fc); // Purple

    for (let i = 0; i < particleCount; i++) {
      const r = 3.0 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);

      const chosenColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 3.0);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const purpleBackLight = new THREE.PointLight(0xa855f7, 4.0, 15);
    purpleBackLight.position.set(-4, -3, 2);
    scene.add(purpleBackLight);

    const cyanRimLight = new THREE.PointLight(0x06b6d4, 3.5, 12);
    cyanRimLight.position.set(3, -4, -2);
    scene.add(cyanRimLight);

    // INTERACTION: MOUSE TRACKING WITH LERP
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // RESIZE OBSERVER
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // VISIBILITY OBSERVER (Pause when scrolled off-screen to maximize performance)
    let isVisible = true;
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });
    visibilityObserver.observe(container);

    // ANIMATION LOOP
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return; // Skip calculation if scrolled out of view

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      targetRotationY += (mouseX * 0.5 - targetRotationY) * 0.05;
      targetRotationX += (-mouseY * 0.5 - targetRotationX) * 0.05;

      // Base rotation + mouse reaction
      mainGroup.rotation.y = elapsedTime * 0.25 + targetRotationY;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.15 + targetRotationX;

      // Floating bob effect
      mainGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.12;

      // Rotate orbital rings
      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.z = -elapsedTime * 0.25;

      // Counter-rotate inner core
      innerMesh.rotation.y = -elapsedTime * 0.5;
      innerMesh.rotation.x = elapsedTime * 0.3;

      // Animate orbital nodes
      nodes.forEach((node, i) => {
        const offset = (i * Math.PI * 2) / nodeCount;
        const speed = 0.6;
        const radius = 2.45;
        node.position.x = Math.cos(elapsedTime * speed + offset) * radius;
        node.position.z = Math.sin(elapsedTime * speed + offset) * radius;
        node.position.y = Math.sin(elapsedTime * speed * 2 + offset) * 0.5;
      });

      // Slowly rotate particle field
      particles.rotation.y = -elapsedTime * 0.04;
      particles.rotation.x = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Clean Three.js resources
      coreGeometry.dispose();
      coreMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      ringGeometry2.dispose();
      ringMaterial2.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, [isLowPower]);

  if (!hasWebGL) {
    return <FloatingCanvasFallback />;
  }

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] lg:h-[540px] flex items-center justify-center">
      {/* Subtle radial backdrop glow */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />
      
      {/* Three.js Canvas Container */}
      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing z-10"
        title="Interactive 3D Technology Visual — Drag or move mouse to interact"
        aria-label="Interactive 3D geometry representing modern frontend architecture"
      />

      {/* Floating Status Pill over visual */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-2 pointer-events-none shadow-lg">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        <span>Three.js Interactive Node Canvas</span>
      </div>
    </div>
  );
};

export default HeroScene3D;
