import { tr } from './tr';
import { ct } from './ct';
import { getPercentageOfSimilarity } from './get-percentage-of-similarity';
const fs = require('fs');

export function getVerses() {
  return {
    tr: tr.split('\n'),
    ct: ct.split('\n')
  }
}

export function getVerse(verseNumber: number) {
  const verses = getVerses();
  return {
    tr: verses.tr[verseNumber - 1],
    ct: verses.ct[verseNumber - 1]
  }
}

export function getSimilaritiesForEachVerse() {
  const verses = getVerses();

  return verses.tr.map((verse, index) => {
    return getPercentageOfSimilarity(verse, verses.ct[index]);
  });
}

export function getSimilarityForAllVerses() {
  const similarities = getSimilaritiesForEachVerse();
  const totalSimilarity = similarities.reduce((a, b) => a + b, 0);
  return totalSimilarity / similarities.length;
}

export function getNumberOfVersesThatAreIdentical() {
  const similarities = getSimilaritiesForEachVerse();
  return similarities.filter(similarity => similarity === 100).length;
}

export function getPercentageOfVersesThatAreIdentical() {
  const numberOfVersesThatAreIdentical = getNumberOfVersesThatAreIdentical();
  const numberOfVerses = getVerses().tr.length;
  return (numberOfVersesThatAreIdentical / numberOfVerses) * 100;
}

export function makeCSVOfEachVerse() {
  const verses = getVerses();
  const similarities = getSimilaritiesForEachVerse();
  const csv = verses.tr.map((_verse, index) => {
    return `${index + 1},${similarities[index]}`;
  }).join('\n');

  fs.writeFile('output.csv', csv, (err) => {
    if (err) throw err;
    console.log('CSV file saved!');
  });
}
