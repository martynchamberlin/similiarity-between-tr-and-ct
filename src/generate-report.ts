import { ct } from './docs/sblgnt-2010';
import { scrivener } from './docs/1881-scrivener-tr';
import { kjv } from './docs/1769-kjv';
import { ctEng } from './docs/kjv-ct-ent';
import { getSimilarityForAllVerses, getPercentageOfVersesThatAreIdentical } from './insights';
import { makeCSVOfEachVerse } from './insights';
import { round } from './round';

export function generateReport() {
  const greekSrcs = { src1: ct, src2: scrivener };
  const englishSrcs = { src1: kjv, src2: ctEng };

  makeCSVOfEachVerse(greekSrcs, 'greek');
  makeCSVOfEachVerse(englishSrcs, 'english');

  const greekSimilarity = getSimilarityForAllVerses(greekSrcs);

  const englishSimilarity = getSimilarityForAllVerses(englishSrcs);

  const greekPercentageOfVersesThatAreIdentical = round(getPercentageOfVersesThatAreIdentical(greekSrcs));
  const englishPercentageOfVersesThatAreIdentical = round(getPercentageOfVersesThatAreIdentical(englishSrcs));

  let output = '';

  output += `Percentage of verses in Greek that are identical: ${greekPercentageOfVersesThatAreIdentical}\n`;
  output += `Percentage of verses in English that are identical: ${englishPercentageOfVersesThatAreIdentical}\n\n`;

  output += `Greek Similarity\n`;
  output += `Levenshtein: ${round(greekSimilarity.levenshtein)}\n`;
  output += `Word for Word: ${round(greekSimilarity.wordForWord)}\n\n`;

  output += `English Similarity\n`;
  output += `Levenshtein: ${round(englishSimilarity.levenshtein)}\n`;
  output += `Word for Word: ${round(englishSimilarity.wordForWord)}\n\n`;

  return output;
}
