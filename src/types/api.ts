export type SourceCategory = 'general' | 'business' | 'technology' | 'entertainment' | 'sports' | 'health' | 'science';

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: SourceCategory;
    language: string;
    country: string;
}

export interface SourcesResponse {
    status: 'ok';
    sources: Source[];
}

export interface ArticleSource {
    id: string | null;
    name: string;
}

export interface Article {
    source: ArticleSource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface ArticlesResponse {
    status: 'ok';
    totalResults: number;
    articles: Article[];
}

export interface ApiError {
    status: 'error';
    code: string;
    message: string;
}
