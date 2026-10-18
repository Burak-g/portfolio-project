export const wisdomQuotes = [
  'Du behøver ikke kende hele vejen for at tage det første skridt.',
  'Små fremskridt tæller, også på de dage hvor de er svære at få øje på.',
  'Det, du øver dig på i dag, bliver lettere at gøre i morgen.',
  'En fejl er en mulighed for at prøve igen med mere viden.',
  'Giv dine idéer en chance. Begynd med det, du kan gøre i dag.',
] as const;

export function getRandomWisdom(random: () => number = Math.random) {
  return wisdomQuotes[Math.floor(random() * wisdomQuotes.length)];
}
