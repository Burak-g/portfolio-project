export const wisdomQuotes = [
  'Det er okay, at tingene er svære lige nu. Det betyder ikke, at de altid vil være det.',
  'Nogle af de vigtigste ting lærer du, når noget ikke går, som du havde håbet',
  'Du kan meget mere, end hvad du selv tror. Nogle gange finder du først ud af det, når du prøver',
  'Du behøver ikke være den bedste for at gøre en forskel.',
  'Du er mere end dine fejl og nederlag. Husk også alt det gode, der gør dig til den, du er.',
  'At bede om hjælp betyder ikke, at du har givet op. Det betyder, at du stadig gerne vil videre',
  'Hvis ingen har sagt det til dig i dag, så får du det herfra: Du gør det sikkert bedre, end du selv tror.',
  'Du ved, hvad der sker, hvis du ikke prøver. Så hvad har du egentlig at miste ved at give det et forsøg?',
  'Du ved aldrig, hvad andre går igennem. Så vær den, der gør deres dag lidt bedre.',
  'Nogle gange har folk ikke brug for gode råd. De har bare brug for én, der tager sig tid til at lytte.',
] as const;

export function getRandomWisdom(random: () => number = Math.random) {
  return wisdomQuotes[Math.floor(random() * wisdomQuotes.length)];
}
