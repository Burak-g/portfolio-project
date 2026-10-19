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
      'En praksisorienteret uddannelse med fokus på programmering, systemudvikling og softwarearkitektur. Gennem uddannelsen har jeg opbygget et solidt fundament inden for udvikling af IT-løsninger, fra analyse af behov og design til implementering, test og kvalitetssikring.',
    highlights: [
      'Udvikling af applikationer med C#, .NET, React og SQL.',
      'Softwarearkitektur, databasedesign og principper for vedligeholdbar kode.',
      'Systemudvikling med fokus på brugerbehov, test og samarbejde i IT-projekter.',
    ],
    type: 'education',
  },

  {
    id: '7',
    title: 'Cand.merc. (Marketing)',
    company: 'Aarhus BSS - Aarhus Universitet',
    period: 'September 2020 - Juni 2022',
    description:
      'En kandidatuddannelse med fokus på marketing, forbrugeradfærd og forretningsstrategi. Uddannelsen har givet mig en stærk forståelse for, hvordan mennesker tænker og handler, og hvordan man kan bruge data og indsigt til at udvikle strategier og skabe værdi for både virksomheder og deres kunder.',
    highlights: [
      'Analyse af forbrugeradfærd, kundebehov og trends.',
      'Udvikling af strategier med fokus på kundeoplevelser, relationer og vækst.',
      'Forståelse for digital udvikling og samspillet mellem teknologi, mennesker og forretning.',
    ],
    type: 'education',
  },
];
