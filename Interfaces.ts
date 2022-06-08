export interface IndexPageProps {
  data: {
    id: string;
    title: string;
    slug: string | any;
    body: string;
    excerpt: string;
    mainImage: string | any;
  }[];
  title: string;
}

export interface TitleProps {
  title: string;
}

export interface ArticleProps {
  article: {
    userId: number;
    id: number;
    title: string;
    body: string;
    excerpt: string;
  };
}

export interface ArticleItemProps {
  data: {
    id: string;
    slug: string | any;
    title: string;
    picture?: string | any;
    mainImage?: string | any;
    body: string;
    excerpt: string;
    authorPicture?: string | any;
    author?: string;
  };
}
