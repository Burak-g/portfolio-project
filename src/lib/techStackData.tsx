import IntentUiAsset from '../assets/tech/intentui.svg?react';
import ShadcnLightIcon from '../assets/tech/shadcnui-light.svg?react';
import ShadcnDarkIcon from '../assets/tech/shadcnui-dark.svg?react';
import CodexIcon from '../assets/tech/codex.svg?react';
import StorybookIcon from '../assets/tech/storybook.svg?react';
import FigmaIcon from '../assets/tech/figma.svg?react';
import SqlServerIcon from '../assets/tech/sqlserver.svg?react';
import CSharpIcon from '../assets/tech/csharp.svg?react';
import DotNetIcon from '../assets/tech/dotnet.svg?react';
import MariaDbIcon from '../assets/tech/mariadb.svg?react';
import NextJsIcon from '../assets/tech/nextjs.svg?react';
import NodeJsIcon from '../assets/tech/nodejs.svg?react';
import PostgresIcon from '../assets/tech/postgresql.svg?react';
import ReactIcon from '../assets/tech/react.svg?react';
import TailwindCssIcon from '../assets/tech/tailwindcss.svg?react';
import TypeScriptIcon from '../assets/tech/typescript.svg?react';

// The source SVG lacks a viewBox, which is required to scale its 200px artwork.
function IntentUiIcon(props: React.SVGProps<SVGSVGElement>) {
  return <IntentUiAsset viewBox="0 0 200 200" {...props} />;
}

export type TechIcon = {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  DarkIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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
      { name: 'React', Icon: ReactIcon },
      { name: 'TypeScript', Icon: TypeScriptIcon },
      { name: 'Next.js', Icon: NextJsIcon },
      { name: 'Tailwind CSS', Icon: TailwindCssIcon },
      { name: 'Intent UI', Icon: IntentUiIcon },
      { name: 'shadcn/ui', Icon: ShadcnLightIcon, DarkIcon: ShadcnDarkIcon },
    ],
  },
  {
    title: 'Backend',
    icons: [
      { name: 'C#', Icon: CSharpIcon },
      { name: '.NET', Icon: DotNetIcon },
      { name: 'Node.js', Icon: NodeJsIcon },
    ],
  },
  {
    title: 'Databases',
    icons: [
      { name: 'SQL Server', Icon: SqlServerIcon },
      { name: 'Postgres', Icon: PostgresIcon },
      { name: 'MariaDB', Icon: MariaDbIcon },
    ],
  },
  {
    title: 'Tooling',
    icons: [
      { name: 'Storybook', Icon: StorybookIcon },
      { name: 'Figma', Icon: FigmaIcon },
      { name: 'Codex', Icon: CodexIcon },
    ],
  },
];
