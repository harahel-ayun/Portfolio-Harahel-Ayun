

export type ProjectCategory = 'Backend' | 'Full Stack' | 'C# / Escritorio' | 'Web';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}
