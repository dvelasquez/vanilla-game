/* tslint:disable:object-literal-sort-keys */
import UniversalRouter, {Context} from 'universal-router';
import './pages/main-page';
const routes = [
    {
        path: '', // optional
        action: () => `<main-page></main-page>`,
    },
];

export default new UniversalRouter(routes);
