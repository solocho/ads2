export interface Article {
  id: number;
  title: string;
  category: string;
  summary: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
}

export interface BlogPost {
  title: string;
  content: string;
}

export type AdType = 'leaderboard' | 'rectangle' | 'banner' | 'skyscraper';