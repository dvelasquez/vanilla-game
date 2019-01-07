export function WebComponentElementDecorator(params) {
    return function classDecorator(target) {
        const newTarget = class extends target {
            constructor(...rest) {
                super();
            }
            connectedCallback() {
                // @ts-ignore
                this.classList.add(params.classes);
            }
        };
        window.customElements.define(params.name, newTarget, params.options);
        return newTarget;
    };
}
//# sourceMappingURL=web-component-element-decorator.js.map