export default function CapitalLetters() {
  const WordComb = (word) => [
    word,
    word.toUpperCase(),
    word.toLowerCase(),
    captialFirst(word),
  ];

  const captialFirst = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  return { WordComb, captialFirst };
}
