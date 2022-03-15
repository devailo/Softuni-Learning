import {html} from '../../node_modules/lit-html/lit-html.js'


import navbarTemplate from "./navbar.js"
import contactListTemplate from "./contactList.js"



const mainTemplate = (data) => html`
<header>
    ${navbarTemplate(data.addContactHandler)}
</header>
<main>
${contactListTemplate(data.contacts)}
</main>
`;

export default mainTemplate;