export function WebComponentDecorator(params) {
    return function classDecorator(target) {
        const newTarget = class extends target {
            constructor(...rest) {
                super();
                this.render();
            }
            render() {
                if (params.shadowDOM && params.shadowDOM.length > 0) {
                    const shadowRoot = this.attachShadow({ mode: params.shadowDOM });
                    shadowRoot.innerHTML = `<style>${params.styles}</style>${this.getTemplate()}`;
                }
                else {
                    this.innerHTML = `${params.styles}${this.getTemplate()}`;
                }
            }
            connectedCallback() {
                this.init();
            }
        };
        window.customElements.define(params.name, newTarget, params.options);
        return newTarget;
    };
}
//# sourceMappingURL=web-component-decorator.js.map