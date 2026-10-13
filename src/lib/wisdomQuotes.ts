export const wisdomQuotes = [
  {
    quote: 'I am vengeance. I am the night. I am Batman.',
    author: 'Batman',
    source: 'Batman: The Animated Series — Nothing to Fear',
    sourceUrl:
      'https://www.dc.com/blog/2017/09/25/in-batman-the-red-death-bruce-wayne-becomes-his-own-enemy',
  },
  {
    quote: "It's not who I am underneath, but what I do that defines me.",
    author: 'Batman',
    source: 'Batman Begins',
    sourceUrl: 'https://en.wikiquote.org/wiki/Batman_Begins',
  },
  {
    quote: 'A hero can be anyone.',
    author: 'Batman',
    source: 'The Dark Knight Rises',
    sourceUrl: 'https://en.wikiquote.org/wiki/The_Dark_Knight_Rises',
  },
] as const;

export function getRandomWisdom(random: () => number = Math.random) {
  return wisdomQuotes[Math.floor(random() * wisdomQuotes.length)];
}
