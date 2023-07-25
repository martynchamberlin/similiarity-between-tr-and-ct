# Percentage of similarity between TR and CT

This calculates the similarity between the Scrivener 1881 edition of the Textus Receptus (TR) and the 2010 edition of the SBL Greek New Testament (CT). It does this for both the Greek texts as well as their English translation counterparts, with the Critical Text taking on the Elizabethan English of the King James Translation (1769 edition) for a true apples-to-apples comparison. The insights are achieved using two different algorithms, as discussed below.

For context to what prompted this, see [this Patreon update from Dr. Mark Ward](https://www.patreon.com/posts/math-wiz-needed-86367127):

> I have two text files of the English New Testament, and I need someone with math skills to help me figure out how to accurately and succinctly—and mathematically—describe how similar they are. This is for the KJV Parallel Bible: one file is the standard 1769 KJV; the other file is the KJV as it would be if it were based on the critical text. I'd like to describe mathematically what percentage of words are exactly the same, and I'm stumbling. I have taught 5th grade homeschool math twice, but I am out of my depth!

### Algorithms

This comparison is implemented via two algorithms.

1. **The Levenshtein distance algorithm.** This is a complex algorithm that is often used in statistics for measuring the distance between two sequences. You can read more about it [here](https://en.wikipedia.org/wiki/Levenshtein_distance).
2. **A Word-for-word algorithm.** This is a much simpler approach than the Levenshtein distance algorithm. It simply takes each verse, strips all formatting and capitalization, gets the number of words that are the same in both sentences, and then compares that against the total number of words in the longer sentence.

### Results

The output of the application yields this:

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

A few things are worth noting. First, the amount of _translatable_ differences in the English texts is nearly 30% lower than the underlying Greek itself, which is expected. Second, the two algorithms, while achieving different numbers, are within a percentage of each other, which gives high confidence to the fidelity of the two approaches. Third, it intuitively make sense that the word-for-word algorithm consistently scores slightly better since it doesn't take word order and punctuation into account.

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
