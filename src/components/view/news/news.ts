import './news.css';
import { Article } from '../../../types/api';

class News {
    private static readonly MAX_ITEMS = 10;
    private static readonly PLACEHOLDER_IMAGE = 'img/news_placeholder.jpg';

    public draw(data: readonly Article[]): void {
        const news = data.slice(0, News.MAX_ITEMS);

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');
        const newsContainer = document.querySelector('.news');

        if (!newsItemTemp || !newsContainer) return;

        news.forEach((item, idx) => {
            const newsClone = document.importNode(newsItemTemp.content, true);

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            const photo = newsClone.querySelector<HTMLElement>('.news__meta-photo');
            if (photo) {
                photo.style.backgroundImage = `url(${item.urlToImage || News.PLACEHOLDER_IMAGE})`;
            }

            this.setText(newsClone, '.news__meta-author', item.author || item.source.name);
            this.setText(newsClone, '.news__meta-date', News.formatDate(item.publishedAt));
            this.setText(newsClone, '.news__description-title', item.title);
            this.setText(newsClone, '.news__description-source', item.source.name);
            this.setText(newsClone, '.news__description-content', item.description ?? '');

            newsClone.querySelector('.news__read-more a')?.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }

    private setText(root: ParentNode, selector: string, text: string): void {
        const element = root.querySelector(selector);
        if (element) element.textContent = text;
    }

    private static formatDate(isoDate: string): string {
        return isoDate.slice(0, 10).split('-').reverse().join('-');
    }
}

export default News;
