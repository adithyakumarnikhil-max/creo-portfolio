export interface ProjectImage {
  url: string;
  alt: string;
  isMain?: boolean;
}

export interface Project {
  id: string;
  title: string;
  address: string;
  description: string;
  year: string;
  area: string;
  services: string[];
  images: ProjectImage[];
  slug: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Luxury Villa',
    address: '123 Design Street, Mumbai',
    description: 'Modern luxury villa with sustainable design elements and smart home integration.',
    year: '2023',
    area: '4500 sq.ft',
    services: ['Architecture', 'Interior Design', 'Landscaping'],
    slug: 'luxury-villa',
    images: [
      { url: '/projects/project-1/main.jpg', alt: 'Front view of the luxury villa', isMain: true },
      { url: '/projects/project-1/image1.jpg', alt: 'Living room interior' },
      { url: '/projects/project-1/image2.jpg', alt: 'Garden and pool area' },
    ]
  },
  // Add more projects following the same structure
];
