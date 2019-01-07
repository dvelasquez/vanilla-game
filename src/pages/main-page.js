var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { WebComponentDecorator } from '../decorators/web-component-decorator.js';
// const styles = require('to-string-loader!css-loader!./login-page.css');// tslint:disable-line
let MainPage = class MainPage extends HTMLElement {
    getTemplate() {
        return `<h1>MAIN</h1>
<h2>Resources</h2>
<pre>
    <code>
        ${this.resources}
    </code>
</pre>
<h2>Versions</h2>
<pre>
    <code>
        ${this.versions}
    </code>
</pre>`;
    }
    async init() {
    }
};
MainPage = __decorate([
    WebComponentDecorator({ name: 'main-page', styles: '', shadowDOM: 'open' })
], MainPage);
//# sourceMappingURL=main-page.js.map