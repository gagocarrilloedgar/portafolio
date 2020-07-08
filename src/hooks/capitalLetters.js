export default function CapitalLetters({ word }) {
  const WordComb = [
    word,
    word.toUpperCase(),
    word.toLowerCase(),
    capitalizeFirstLetter(word),
  ];
  return WordComb;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
