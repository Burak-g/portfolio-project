export const terminalCommandNames = [
  'help',
  'about',
  'projects',
  'skills',
  'journey',
  'contact',
  'clear',
] as const;

type Context = { projects: string[]; skills: string[] };
type Result = { output: string; section?: string; clear?: boolean };

/** Commands only read portfolio data and navigate to local sections. */
export function runTerminalCommand(input: string, context: Context): Result {
  const command = input.trim().toLowerCase();
  switch (command) {
    case 'help':
      return {
        output:
          'Tilgængelige kommandoer:\n  about     Om Burak\n  projects  Se projekter\n  skills    Se teknologier\n  journey   Erfaring og uddannelse\n  contact   Kontaktoplysninger\n  clear     Ryd terminalen\n\n↑ / ↓: kommandohistorik · Tab: fuldfør kommando',
      };
    case 'about':
      return {
        output:
          'Burak Gültekin — frontendudvikler hos Region Midtjylland, uddannet datamatiker.\nÅbner Om mig…',
        section: 'about',
      };
    case 'projects':
      return { output: `${context.projects.join('\n')}\n\nÅbner projekter…`, section: 'projects' };
    case 'skills':
      return { output: `${context.skills.join('\n')}\n\nÅbner tech stack…`, section: 'techStack' };
    case 'journey':
      return { output: 'Åbner erhvervserfaring og uddannelse…', section: 'journey' };
    case 'contact':
      return {
        output:
          'E-mail: burak-1998@live.dk\nTelefon: +45 50 66 72 53\nLinkedIn: linkedin.com/in/burak-gultekin\n\nÅbner kontakt…',
        section: 'contact',
      };
    case 'clear':
      return { output: '', clear: true };
    case '':
      return { output: '' };
    default:
      return { output: `Ukendt kommando: ${input.trim()}\nSkriv help for at se mulighederne.` };
  }
}
