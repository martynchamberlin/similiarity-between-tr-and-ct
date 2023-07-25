import { getWordForWordSimilarity } from './algorithms/word-for-word';
import { getPercentageInLevenshtein } from './algorithms/levenshtein-distance';
import { TotalSimilarity, Sources } from './types';

export function getPercentageOfSimilarity(sources: Sources): TotalSimilarity {
  return {
    levenshtein: getPercentageInLevenshtein(sources.src1, sources.src2),
    wordForWord: getWordForWordSimilarity(sources.src1, sources.src2)
  }
}
