import { html, render } from '../node_modules/lit-html/lit-html.js';

const template = (items, styleClass) => html`
    <h1>Hello from Lit HTML</h1>

    ${items.length == 0
        ? html`<p>No users</p>`
        : html`<p>yes users</p>`
    }
    
    <ul class=${styleClass}>
       ${items.map(x => html`<li>${x}</li>`)}
    </ul>

    <input type="text" value=${items[0]}>
    <button ?disabled=${items.length > 6} @click=${() => onClick()}>ADD</button>
`;

const names = ['ovailon', 'petard', 'jiki', 'Persival']
const root = document.getElementById('root');

const templateRes = template(names, 'vertical');

render(templateRes, root);

function onClick() {
    names.push('pesho' + Math.random())
    render(template(names, 'vertical'), root);
}
