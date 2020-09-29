export interface Article {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title?: string;
  subTitle?: string;
  href?: string;
  articleDirectory?: ArticleDirectory;
}

export interface ArticleDirectory {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  chineseName?: string;
  englishName?: string;
}
