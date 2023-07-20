import { getWordForWordSimilarity } from './algorithms/word-for-word';
import { getPercentageInLevenshtein } from './algorithms/levenshtein-distance';

export function getPercentageOfSimilarity(sentence1: string, sentence2: string, useLevenshtein: boolean = false): number {
  if (useLevenshtein) {
    return getPercentageInLevenshtein(sentence1, sentence2);
  }

  return getWordForWordSimilarity(sentence1, sentence2);
}
