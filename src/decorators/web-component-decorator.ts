export interface IComponentOptions {
    name: string;
    styles?: string;
    options?: any;
    shadowDOM?: string;
}

export function WebComponentDecorator(params: IComponentOptions) {
    return function classDecorator<T extends { new(...args: any[]): {} }>(
        target: T,
    ) {
        const newTarget = class extends target {
            [x: string]: any;

            constructor(...rest: any[]) {
                super();
                this.render();
            }

            public render() {
                if (params.shadowDOM && params.shadowDOM.length > 0) {
                    const shadowRoot = this.attachShadow({mode: params.shadowDOM});
                    shadowRoot.innerHTML = `<style>${
                        params.styles
                        }</style>${this.getTemplate()}`;
                } else {
                    this.innerHTML = `${params.styles}${this.getTemplate()}`;
                }
            }

            private connectedCallback() {
                this.init();
            }
        };
        window.customElements.define(params.name, newTarget, params.options);
        return newTarget;
    };
}
