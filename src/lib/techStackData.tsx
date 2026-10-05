/* eslint-disable */
// @ts-expect-error -- SVGs are transformed by vite-plugin-svgr at build time
import BootstrapIcon from '../assets/tech/bootstrap.svg?react';
// @ts-expect-error
import CSharpIcon from '../assets/tech/csharp.svg?react';
// @ts-expect-error
import CssIcon from '../assets/tech/css.svg?react';
// @ts-expect-error
import DotNetIcon from '../assets/tech/dotnet.svg?react';
// @ts-expect-error
import HtmlIcon from '../assets/tech/html.svg?react';
// @ts-expect-error
import JsIcon from '../assets/tech/js.svg?react';
// @ts-expect-error
import MariaDbIcon from '../assets/tech/mariadb.svg?react';
// @ts-expect-error
import MaterialUiIcon from '../assets/tech/materialui.svg?react';
// @ts-expect-error
import NextJsIcon from '../assets/tech/nextjs.svg?react';
// @ts-expect-error
import NodeJsIcon from '../assets/tech/nodejs.svg?react';
// @ts-expect-error
import PostgresIcon from '../assets/tech/postgresql.svg?react';
// @ts-expect-error
import ReactIcon from '../assets/tech/react.svg?react';
// @ts-expect-error
import TailwindCssIcon from '../assets/tech/tailwindcss.svg?react';
// @ts-expect-error
import ViteJsIcon from '../assets/tech/vitejs.svg?react';
// @ts-expect-error
import TypeScriptIcon from '../assets/tech/typescript.svg?react';

export type TechIcon = {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  align?: 'left' | 'right';
};

export type TechCategory = {
  title: string;
  icons: TechIcon[];
};

export const techCategories: TechCategory[] = [
  {
    title: 'Frontend',
    icons: [
      { name: 'HTML', Icon: HtmlIcon },
      { name: 'CSS', Icon: CssIcon },
      { name: 'JavaScript', Icon: JsIcon },
      { name: 'TypeScript', Icon: TypeScriptIcon },
      { name: 'React', Icon: ReactIcon },
      { name: 'Next.js', Icon: NextJsIcon },
      { name: 'Tailwind CSS', Icon: TailwindCssIcon },
      { name: 'Bootstrap', Icon: BootstrapIcon },
      { name: 'Material UI', Icon: MaterialUiIcon },
    ],
  },
  {
    title: 'Backend',
    icons: [
      { name: 'Node.js', Icon: NodeJsIcon },
      { name: 'C#', Icon: CSharpIcon },
      { name: '.NET', Icon: DotNetIcon },
    ],
  },
  {
    title: 'Databases',
    icons: [
      { name: 'MariaDB', Icon: MariaDbIcon },
      { name: 'Postgres', Icon: PostgresIcon },
    ],
  },
  {
    title: 'Tooling',
    icons: [{ name: 'Vite', Icon: ViteJsIcon }],
  },
];
