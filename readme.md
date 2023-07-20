# Percentage of similarity between TR and CT

For context, see [this Patreon update from Dr. Mark Ward](https://www.patreon.com/posts/math-wiz-needed-86367127):

> I have two text files of the English New Testament, and I need someone with math skills to help me figure out how to accurately and succinctly—and mathematically—describe how similar they are. This is for the KJV Parallel Bible: one file is the standard 1769 KJV; the other file is the KJV as it would be if it were based on the critical text. I'd like to describe mathematically what percentage of words are exactly the same, and I'm stumbling. I have taught 5th grade homeschool math twice, but I am out of my depth!

This achieves that in two different ways, using the levenshtein distance algorithm and a simpler word-for-word algorithm.

### To build the app:

```
npm run build
```

To run the app (in a console):

```
npm run run
```

(Or simply `node dist/main.js`)

To compile _and_ run the app:

```
npm run serve
```

### Usage

Import the desired function from `insights.ts` into `main.ts` and call it and log its output. Examples:

```ts
// Using the levenshtein distance algo and word-for-word respectively

// 97.04306009137372, 97.43581960879729
getSimilarityForAllVerses()

// 69.64936533869549, 74.46273721251728
getPercentageOfVersesThatAreIdentical()
```

Note that there are two different algorithms that can be used. A Levenshtein distance algorithm that is number-theory-heavy, and a word-for-word algorithm. This is controlled by the 3rd param passed to `getPercentageOfSimilarity()`.
