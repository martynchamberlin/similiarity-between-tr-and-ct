import { getPercentageOfSimilarity } from './get-percentage-of-similarity';
const fs = require('fs');
import { VerseSimilarity, TotalSimilarity, Sources, Verses } from './types';
import { round } from './round';

export function getVerses(sources: Sources): Verses {
  return {
    src1: sources.src1.split('\n'),
    src2: sources.src2.split('\n')
  }
}

export function getSimilaritiesForEachVerse(sources: Sources): VerseSimilarity {
  const verses = getVerses(sources);

  return verses.src1.map((verse, index) => {
    return getPercentageOfSimilarity({ src1: verse, src2: verses.src2[index] });
  });
}

export function getSimilarityForAllVerses(sources: Sources): TotalSimilarity {
  const similarities = getSimilaritiesForEachVerse(sources);

  const levenshteinSimilarity = similarities.reduce((a, b) => a + b.levenshtein, 0);
  const wordForWordSimilarity = similarities.reduce((a, b) => a + b.wordForWord, 0);

  return {
    levenshtein: levenshteinSimilarity / similarities.length,
    wordForWord: wordForWordSimilarity / similarities.length,
  }
}

export function getNumberOfVersesThatAreIdentical(sources: Sources): number {
  const similarities = getVerses(sources);
  return similarities.src1.filter((verse, index) => verse === similarities.src2[index]).length;
}

export function getPercentageOfVersesThatAreIdentical(sources: Sources): number {
  const numberOfVersesThatAreIdentical = getNumberOfVersesThatAreIdentical(sources);
  const numberOfVerses = getVerses(sources).src1.length;
  return (numberOfVersesThatAreIdentical / numberOfVerses) * 100;
}

export function makeCSVOfEachVerse(sources: Sources, filename: string): void {
  const verses = getVerses(sources);
  const similarities = getSimilaritiesForEachVerse(sources);
  const csv = `Verse number,Levenshtein,Word for word\n${verses.src1.map((_verse, index) => {
    return `${index + 1},${round(similarities[index].levenshtein)},${round(similarities[index].wordForWord)}`;
  }).join('\n')}`;

  fs.writeFile(`output/${filename}.csv`, csv, (err) => {
    if (err) throw err;
  });
}
