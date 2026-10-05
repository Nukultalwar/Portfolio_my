import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button';
        setIsPointer(!!isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Soft Ambient Radial Light */}
      <div
        className="fixed pointer-events-none z-30 transition-transform duration-75 ease-out rounded-full blur-3xl opacity-30 bg-cyan-500/20"
        style={{
          width: isPointer ? 320 : 240,
          height: isPointer ? 320 : 240,
          transform: `translate3d(${position.x - (isPointer ? 160 : 120)}px, ${
            position.y - (isPointer ? 160 : 120)
          }px, 0)`,
        }}
        aria-hidden="true"
      />
      {/* Precision Reticle Dot */}
      <div
        className="fixed pointer-events-none z-50 rounded-full border border-cyan-400/50 transition-all duration-100 ease-out"
        style={{
          width: isPointer ? 36 : 14,
          height: isPointer ? 36 : 14,
          backgroundColor: isPointer ? 'rgba(56, 189, 248, 0.15)' : 'rgba(56, 189, 248, 0.7)',
          transform: `translate3d(${position.x - (isPointer ? 18 : 7)}px, ${
            position.y - (isPointer ? 18 : 7)
          }px, 0)`,
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
