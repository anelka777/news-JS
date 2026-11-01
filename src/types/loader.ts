export enum Endpoint {
    Sources = 'sources',
    Everything = 'everything',
}

export type HttpMethod = 'GET' | 'POST';

export type UrlOptions = Partial<Record<'apiKey' | 'sources', string>>;

export interface GetRespParams {
    endpoint: Endpoint;
    options?: UrlOptions;
}

export type Callback<T> = (data: T) => void;
