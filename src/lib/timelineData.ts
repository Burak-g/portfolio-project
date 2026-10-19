export type TimelineType = 'work' | 'education';

export type TimelineEntry = {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
  type: TimelineType;
};

export const workExperience: TimelineEntry[] = [
  {
    id: '1',
    title: 'Softwareudvikler',
    company: 'Region Midtjylland, Digitalisering og IT',
    period: 'Juli 2026 - Nu',
    description:
      'Som softwareudvikler hos Region Midtjylland arbejder jeg primært med frontendudvikling, hvor jeg er med til at digitalisere og effektivisere arbejdsprocesser i sundhedsvæsenet. Jeg har fokus på at skabe brugervenlige løsninger, der både fungerer teknisk og giver mening for dem, der skal bruge dem i deres hverdag.',
    highlights: [
      'Udvikling af genanvendelige komponenter og brugergrænseflader med React og TypeScript.',
      'Samarbejde i et agilt team med fokus på sparring og løbende forbedringer.',
      'Anvendelse af AI til at optimere mit udviklingsflow og styrke min faglige udvikling.',
    ],
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
      'Hos Publico Kommunikation arbejdede jeg med digital marketing og webudvikling med fokus på at skabe brugervenlige digitale løsninger og styrke virksomheders online tilstedeværelse. Rollen kombinerede teknisk arbejde med strategisk rådgivning og tæt samarbejde med designere, udviklere og eksterne samarbejdspartnere.',
    highlights: [
      'Udvikling og tilpasning af websites i HubSpot CMS og WordPress med fokus på brugeroplevelse og konvertering.',
      'Planlægning og optimering af Google Ads-kampagner og e-mailmarketing.',
      'Koordinering af websiteprojekter i samarbejde med designere, udviklere og tekniske partnere.',
    ],
    type: 'work',
  },
  {
    id: '5',
    title: 'Content Specialist',
    company: 'Factor X Adman',
    period: 'Juni 2021 - Juni 2022',
    description:
      'Hos Factor X Adman arbejdede jeg med at udvikle og optimere virksomheders digitale indhold med fokus på synlighed, brugeroplevelse og konvertering. Arbejdet kombinerede indholdsoptimering med teknisk SEO og automatisering af marketingprocesser.',
    highlights: [
      'Udvikling og optimering af websiteindhold i HubSpot CMS og WordPress.',
      'Søgeordsanalyser, on-page SEO og tekniske analyser med Ahrefs og Screaming Frog.',
      'Opsætning af automatiserede marketingflows i HubSpot med fokus på lead nurturing og segmenteret kommunikation.',
    ],
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
