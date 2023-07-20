import { levenshteinDistance } from './levenshtein-distance';

export function getPercentageOfSimilarity(sentence1, sentence2) {
  const maxLength = Math.max(sentence1.length, sentence2.length);
  const levenshteinDistanceValue = levenshteinDistance(sentence1, sentence2);
  const percentage = (levenshteinDistanceValue / maxLength) * 100;
  return 100 - percentage;
}
