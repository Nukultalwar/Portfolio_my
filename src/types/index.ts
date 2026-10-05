export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'Full Stack' | 'Frontend' | 'Interactive' | 'Utility';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  isPrivateOrInProgress?: boolean;
  statusText?: string;
  keyFeatures: string[];
  techStack: string[];
  architectureNotes?: string;
  metrics?: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Proficient' | 'Familiar';
    experienceFocus: string;
    icon?: string;
  }[];
}

export interface WorkflowStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ValuePillar {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  iconName: string;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  avatarUrl: string;
  profileUrl: string;
  bio: string;
  recentRepos: {
    name: string;
    description: string;
    htmlUrl: string;
    language: string;
    stars: number;
    forks: number;
    updatedAt: string;
  }[];
}
