export interface Project {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [];
export const categories: string[] = [];
