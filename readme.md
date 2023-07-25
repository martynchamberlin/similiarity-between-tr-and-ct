# Percentage of similarity between TR and CT

This analytical tool calculates the similarity between the Scrivener 1881 edition of the Textus Receptus (TR) and the 2010 edition of the SBL Greek New Testament (a critical text, CT). The tool works for both the Greek texts as well as their English counterparts in the KJV Parallel Bible (kjvparallelbible.org). The KJV Parallel Bible "translates" the critical text into the Elizabethan English of the King James Version for a true apples-to-apples comparison, in English, of the two major families of printed editions of the Greek New Testament. These insights are achieved using two different algorithms, as discussed below.

### Algorithms

This comparison is implemented via two algorithms.

1. **The Levenshtein distance algorithm.** This is a complex algorithm that is often used in statistics for measuring the distance between two sequences. You can read more about it [here](https://en.wikipedia.org/wiki/Levenshtein_distance).
2. **A Word-for-word algorithm.** This is a much simpler approach than the Levenshtein distance algorithm. It simply takes each verse, strips all formatting and capitalization, gets the number of words that are the same in both sentences, and then compares that against the total number of words in the longer sentence.

### Results

The output of the application yields the following results:

```
Percentage of verses in Greek that are identical: 40.29
Percentage of verses in English that are identical: 69.06

Greek Similarity
Levenshtein: 94.39
Word for Word: 95.60

English Similarity
Levenshtein: 96.83
Word for Word: 97.19
```

A few things are worth noting.

1. First, the amount of _translatable_ differences in the English texts is nearly 30% lower than the underlying Greek itself, which is expected, because many, many textual variants in the Greek New Testament manuscript tradition are word-order or spelling or other minor differences that make no difference to the meaning of the sentences in which they are found.
2. Second, the two algorithms produce final percentages that are very closet to each other, a result which gives high confidence to the fidelity of the two approaches.
3. Third, the word-for-word algorithm consistently scores slightly higher than the Levenshtein algorithm, since it doesn't take word order and punctuation into account.
4. Note that the KJV Parallel Bible website actually uses the NA28 as a base text; the text provided here uses the SBLGNT and therefore matches the edition in Logos.

In the `output` directory one may find an `english.csv` and a `greek.csv` to see the verse-by-verse breakdown of the algorithms.

### To build the app:

To compile the TS into JS, run this command:

```
npm run build
```

To run the app once the build has completed:

```
npm run run
```

(Or simply `node dist/main.js`)

To compile _and_ run the app:

```
npm run serve
```
