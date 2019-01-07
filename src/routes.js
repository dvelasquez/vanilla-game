/* tslint:disable:object-literal-sort-keys */
import UniversalRouter from 'universal-router';
import './pages/main-page';
const routes = [
    {
        path: '',
        action: () => `<main-page></main-page>`,
    },
];
export default new UniversalRouter(routes);
//# sourceMappingURL=routes.js.map