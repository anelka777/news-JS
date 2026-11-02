import './sources.css';
import { Source } from '../../../types/api';

class Sources {
    public draw(data: readonly Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        const sourcesContainer = document.querySelector('.sources');

        if (!sourceItemTemp || !sourcesContainer) return;

        data.forEach((item) => {
            const sourceClone = document.importNode(sourceItemTemp.content, true);
            const nameElement = sourceClone.querySelector('.source__item-name');
            const itemElement = sourceClone.querySelector('.source__item');

            if (nameElement) nameElement.textContent = item.name;
            if (itemElement) itemElement.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        sourcesContainer.append(fragment);
    }
}

export default Sources;
