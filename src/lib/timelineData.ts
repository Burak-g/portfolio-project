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
    title: 'Digital Marketing-konsulent',
    company: 'Publico Kommunikation',
    period: 'Oktober 2022 - November 2025',
    description:
      'I min nuværende rolle arbejder jeg bredt med digital marketing og webudvikling. Jeg opsætter og optimerer Google Ads-kampagner, tilpasser hjemmesideindhold i HubSpot CMS og WordPress (Divi og Elementor), og arbejder strategisk med email marketing i HubSpot. Derudover tilpasser jeg templates i Design Manager med fokus på konvertering og brugeroplevelse, og driver websiteprojekter i tæt samarbejde med designere, udviklere og tekniske partnere.',
    type: 'work',
  },
  {
    id: '2',
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
    id: '4',
    title: 'Datamatiker Online',
    company: 'UCL Erhvervsakademi og Professionshøjskole',
    period: 'Februar 2024 - Juni 2026 (forventet afslutning)',
    description:
      'Softwareudvikling med fokus på C#, .NET, SQL, Blazor og softwarearkitektur, herunder principper som SOLID, GRASP, MVVM og MVC. Gennem studiet har jeg opnået praktisk erfaring med at udvikle applikationer ved hjælp af moderne designmønstre og databasedesign. Jeg arbejder desuden med agile metoder som Scrum og deltager i samarbejdsprojekter, hvor der lægges vægt på clean code, skalerbarhed og vedligeholdbarhed.',
    type: 'education',
  },
  {
    id: '5',
    title: 'Cand.Merc.Marketing',
    company: 'Aarhus BSS - Aarhus Universitet',
    period: 'September 2020 - Juni 2022',
    description:
      'Under kandidatuddannelsen Cand.Merc.Marketing, har jeg specialiseret mig i branding, forbrugeradfærd, markedsstrategi og digital markedsføring. Uddannelsen har givet mig en solid forståelse for, hvordan man omsætter indsigt og data til relevante strategiske initiativer. Jeg har arbejdet analytisk og forretningsorienteret med at udvikle løsninger, der skaber reel værdi og styrker relationen mellem organisationer og deres målgrupper.',
    type: 'education',
  },
];
