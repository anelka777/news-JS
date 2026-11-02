import Loader from './loader';

const mocksPrefix = process.env.USE_MOCKS === 'true' ? 'mocks/' : '';

class AppLoader extends Loader {
    constructor() {
        super(`${process.env.API_URL}${mocksPrefix}`, {
            apiKey: process.env.API_KEY,
        });
    }
}

export default AppLoader;
