export type TimelineType = 'work' | 'education';

export type TimelineRole = {
  id: string;
  title: string;
  period: string;
};

export type TimelineEntry = {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
  roles?: TimelineRole[];
  type: TimelineType;
};

export const workExperience: TimelineEntry[] = [
  {
    id: '1',
    title: 'Region Midtjylland',
    company: 'Digitalisering og IT',
    period: 'Januar 2026 - Nu',
    roles: [
      { id: '1', title: 'Softwareudvikler', period: 'Juli 2026 - Nu' },
      { id: '2', title: 'Studentermedhjælper', period: 'April 2026 - Juni 2026' },
      { id: '3', title: 'Softwarepraktikant', period: 'Januar 2026 - April 2026' },
    ],
    description:
      'Jeg startede som softwarepraktikant og fortsatte efterfølgende som studentermedhjælper, inden jeg blev ansat som softwareudvikler. Gennem mine forskellige roller har jeg primært arbejdet med frontendudvikling af digitale løsninger, der understøtter og effektiviserer arbejdsprocesser i sundhedsvæsenet.',
    highlights: [
      'Udvikling af UI og genanvendelige komponenter med React og TypeScript.',
      'Arbejde med API-integrationer og samarbejde om løsninger på tværs af frontend og backend.',
      'Deltagelse i agile udviklingsprocesser med code reviews, sparring og løbende forbedringer.',
    ],
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
      'Strategisk rådgivning om digitale løsninger samt planlægning og optimering af Google Ads-kampagner og e-mailmarketing.',
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
    title: 'Cand.merc marketing',
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
  {
    id: '8',
    title: 'BA in Marketing and Management Communication',
    company: 'Aarhus BSS - Aarhus Universitet',
    period: 'September 2017 - Juni 2020',
    description:
      'En international bacheloruddannelse, der kombinerer kommunikation, marketing og forretningsforståelse. Uddannelsen har givet mig et solidt fundament inden for strategisk kommunikation, branding og forbrugeradfærd samt en forståelse for, hvordan virksomheder kommunikerer med deres målgrupper.',
    highlights: [
      'Planlægning og udvikling af kommunikations- og marketingstrategier.',
      'Forståelse for branding, forbrugeradfærd og virksomheders kommunikation.',
      'Projektledelse og kommunikation på tværs af organisationer og kulturer.',
    ],
    type: 'education',
  },
];
