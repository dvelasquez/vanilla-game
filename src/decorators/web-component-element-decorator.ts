interface IElementOptions {
    name: string;
    classes: string;
    options?: any;
}

export function WebComponentElementDecorator(params: IElementOptions) {
    return function classDecorator<T extends { new(...args: any[]): ({}) }>(target: T) {

        const newTarget = class extends target {
            constructor(...rest: any[]) {
                super();
            }
            connectedCallback(){
                // @ts-ignore
                this.classList.add(params.classes);
            }
        };
        window.customElements.define(params.name, newTarget, params.options);
        return newTarget;
    };
}
