export type Sources = {
  src1: string;
  src2: string;
}

export type Verses = {
  src1: string[];
  src2: string[];
}

export type TotalSimilarity = {
  levenshtein: number;
  wordForWord: number;
}

export type VerseSimilarity = {
  levenshtein: number;
  wordForWord: number;
}[];
