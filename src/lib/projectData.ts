import gotorzImg from '../assets/images/gotorz-hero.jpg';

export type Project = {
  id: string;
  title: string;
  description: string;
  imageSrc: string; // e.g. imported image url
  imageAlt: string;
  tech: string[]; // chip labels
  href?: string; // "Read more" / live demo
  githubHref?: string; // optional
};

export const projects: Project[] = [
  {
    id: 'gotorz',
    title: 'Gotorz',
    description:
      'Gotorz er et full-stack rejsebookingsystem, som er udviklet i forbindelse med eksamensprojektet på 3. semester. Systemet giver brugeren mulighed for at søge og booke rejsepakker bestående af fly og hotel – direkte gennem en brugervenlig applikation. Systemet indeholder funktioner som søgning, booking og brugerhåndtering.',
    imageSrc: gotorzImg,
    imageAlt: 'Screenshot of Gotorz project',
    tech: [
      'C#',
      '.NET',
      'Blazor Web App',
      'ASP.NET Core Web API',
      'HTML',
      'CSS',
      'Entity Framework Core',
      'SQLite',
      'Docker',
    ],
    githubHref: 'https://github.com/Burak-g/FullGotorz',
  },
  {
    id: 'portfolio',
    title: 'Portfolio (React)',
    description:
      'Mit personlige portfolio-site bygget med React, TypeScript, Tailwind CSS og Intent UI. Fokus på genanvendelige komponenter, lyst og mørkt tema samt en interaktiv terminal.',
    imageSrc: gotorzImg,
    imageAlt: 'Screenshot of Portfolio project',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Intent UI', 'Vite'],
    githubHref: 'https://github.com/Burak-g/portfolio-project',
  },
];
