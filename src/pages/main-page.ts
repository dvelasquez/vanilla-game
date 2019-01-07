import {WebComponentDecorator} from '../decorators/web-component-decorator.js';

// const styles = require('to-string-loader!css-loader!./login-page.css');// tslint:disable-line

@WebComponentDecorator({name: 'main-page', styles: '', shadowDOM: 'open'})
class MainPage extends HTMLElement {

    private resources: any;
    private versions: any;

    public getTemplate(): string {
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

    private async init() {
    }
}
