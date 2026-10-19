export type TimelineType = 'work' | 'education';

export type TimelineEntry = {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: TimelineType;
};

export const workExperience: TimelineEntry[] = [
  {
    id: '1',
    title: 'Softwareudvikler',
    company: 'Region Midtjylland, Digitalisering og IT',
    period: 'Juli 2026 - Nu',
    description:
      'Som softwareudvikler hos Region Midtjylland arbejder jeg primært med frontendudvikling, hvor jeg er med til at skabe digitale løsninger, der gør arbejdsprocesser i sundhedsvæsenet nemmere og mere effektive.\n' +
      '\n' +
      'Mit primære fokus er React og TypeScript, som jeg bruger til at udvikle brugervenlige og genanvendelige komponenter. Jeg lægger vægt på at skabe løsninger, der ikke kun fungerer teknisk, men også giver mening for dem, der skal bruge dem i deres hverdag.\n' +
      '\n' +
      'Jeg er en del af et agilt team, hvor samarbejde, sparring og løbende forbedringer er en naturlig del af hverdagen. Samtidig er jeg nysgerrig på nye teknologier og arbejder aktivt med at integrere AI i mit udviklingsflow for at arbejde smartere og udvikle mig som softwareudvikler.',
    type: 'work',
  },
  {
    id: '2',
    title: 'Studentermedhjælper',
    company: 'Region Midtjylland, Digitalisering og IT',
    period: 'April 2026 - Juni 2026',
    description: '',
    type: 'work',
  },
  {
    id: '3',
    title: 'Softwarepraktikant',
    company: 'Region Midtjylland, Digitalisering og IT',
    period: 'Januar 2026 - April 2026',
    description: '',
    type: 'work',
  },
  {
    id: '4',
    title: 'Digital Marketing-konsulent',
    company: 'Publico Kommunikation',
    period: 'Oktober 2022 - November 2025',
    description:
      'I min tidligere rolle arbejdede jeg bredt med digital marketing og webudvikling. Jeg stod for opsætning og optimering af Google Ads-kampagner, tilpasning af hjemmesideindhold i HubSpot CMS og WordPress (Divi og Elementor) samt strategisk arbejde med e-mailmarketing i HubSpot.\n' +
      '\n' +
      'Derudover tilpassede jeg templates i Design Manager med fokus på konvertering og brugeroplevelse og drev websiteprojekter i tæt samarbejde med designere, udviklere og tekniske samarbejdspartnere.',
    type: 'work',
  },
  {
    id: '5',
    title: 'Content Specialist',
    company: 'Factor X Adman',
    period: 'Juni 2021 - Juni 2022',
    description:
      'I denne stilling arbejdede jeg med udvikling og optimering af websiteindhold i HubSpot CMS og WordPress, med fokus på både konvertering og SEO. Jeg planlagde og udførte søgeordsanalyser og on-page optimering via Ahrefs, hvilket styrkede placeringerne i Google. Derudover lavede jeg tekniske SEO-analyser med Screaming Frog og implementerede forbedringer, som reducerede fejl og forbedrede crawlability. Jeg opsatte også marketing automation-flows i HubSpot til lead nurturing og segmenteret kommunikation.',
    type: 'work',
  },
];

export const education: TimelineEntry[] = [
  {
    id: '6',
    title: 'Datamatiker Online',
    company: 'UCL Erhvervsakademi og Professionshøjskole',
    period: 'Februar 2024 - Juni 2026',
    description:
      'Softwareudvikling med fokus på C#, .NET, SQL, React og softwarearkitektur, herunder principper som SOLID, GRASP og MVC. Gennem studiet har jeg opnået praktisk erfaring med at udvikle applikationer ved hjælp af moderne designmønstre og databasedesign. Jeg arbejder desuden med agile metoder som Scrum og deltager i samarbejdsprojekter, hvor der lægges vægt på clean code, skalerbarhed og vedligeholdbarhed.',
    type: 'education',
  },
  {
    id: '7',
    title: 'Cand.Merc.Marketing',
    company: 'Aarhus BSS - Aarhus Universitet',
    period: 'September 2020 - Juni 2022',
    description:
      'Under kandidatuddannelsen Cand.Merc.Marketing, har jeg specialiseret mig i branding, forbrugeradfærd, markedsstrategi og digital markedsføring. Uddannelsen har givet mig en solid forståelse for, hvordan man omsætter indsigt og data til relevante strategiske initiativer. Jeg har arbejdet analytisk og forretningsorienteret med at udvikle løsninger, der skaber reel værdi og styrker relationen mellem organisationer og deres målgrupper.',
    type: 'education',
  },
];
