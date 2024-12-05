// app/projects/project.ts
export interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    technologiesWithIcons: { name: string; icon: string }[];
}