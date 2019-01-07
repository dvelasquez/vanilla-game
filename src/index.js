import router from './routes.js';
import browserFeatureDetection from './browser-feature-detection.js';
const container = document.getElementById('app');
if (browserFeatureDetection()) {
    async function render() {
        container.innerHTML = await router.resolve(location.pathname);
    }
    render(); // run client-side application
    // in case if you need single page application
    window.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const anchor = event.target;
            const state = null;
            const title = anchor.textContent;
            const url = anchor.pathname + anchor.search + anchor.hash;
            history.pushState(state, title, url);
            render();
        }
    });
    window.addEventListener('route:change', (event) => {
        const detail = event.detail;
        // const currentState = history.state;
        const currentPath = window.location.pathname;
        switch (detail.route) {
            case 'AUTH_OK':
                if (currentPath !== '/main') {
                    history.pushState(null, 'Logged in', '/main');
                    render();
                }
                break;
            case 'AUTH_FAIL':
                if (currentPath !== '/') {
                    history.pushState(null, 'Not Logged', '/');
                    render();
                }
                break;
            default:
                if (currentPath !== '/') {
                    history.pushState(null, 'Not Logged', '/');
                    render();
                }
                break;
        }
    });
}
else {
    container.innerHTML = '<h1>Please, upgrade your browser to a newer version.</h1>';
}
//# sourceMappingURL=index.js.map