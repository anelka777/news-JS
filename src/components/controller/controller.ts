import AppLoader from './appLoader';
import { Callback, Endpoint } from '../../types/loader';
import { ArticlesResponse, SourcesResponse } from '../../types/api';

class AppController extends AppLoader {
    public getSources(callback: Callback<SourcesResponse>): void {
        super.getResp<SourcesResponse>({ endpoint: Endpoint.Sources }, callback);
    }

    public getNews(e: MouseEvent, callback: Callback<ArticlesResponse>): void {
        let target = e.target;
        const newsContainer = e.currentTarget;

        if (!(newsContainer instanceof HTMLElement)) return;

        while (target !== newsContainer) {
            if (!(target instanceof HTMLElement)) return;

            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');

                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<ArticlesResponse>(
                        {
                            endpoint: Endpoint.Everything,
                            options: { sources: sourceId },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
