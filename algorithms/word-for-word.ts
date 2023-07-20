/*
 * This takes two sentences, strips all formatting and capitalization, gets the number
 * of words that are the same in both sentences, and then compares that against the
 * total number of words in the longer sentence.
 */
export function getWordForWordSimilarity(sentence1: string, sentence2: string): number {
  const sortedWords1 = getSortedWords(sentence1);
  const sortedWords2 = getSortedWords(sentence2);

  const matchingWords = getMatchingWords(sortedWords1, sortedWords2);

  const maxLength = Math.max(sortedWords1.length, sortedWords2.length);
  const percentage = (matchingWords.length / maxLength) * 100;

  return percentage;
}

function getMatchingWords(sentence1: string[], sentence2: string[]) {
  const result: string[] = [];

  for (let i = 0; i < sentence1.length; i++) {
    const word = sentence1[i];
    if (sentence2.includes(word)) {
      sentence2.splice(sentence2.indexOf(word), 1);
      result.push(word);
    }
  }

  return result;
}

function getSortedWords(sentence: string): string[] {
  return sentence.split(' ').map(word => word.toLowerCase().replace(/[^0-9a-z]/gi, '')).sort();
}
