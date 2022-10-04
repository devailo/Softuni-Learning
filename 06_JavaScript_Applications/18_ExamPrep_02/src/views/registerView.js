import { html } from '../../node_modules/lit-html/lit-html.js';

import * as userService from '../services/userService.js'

const registerTemplate = (submitHandler) => html`
<section id="register-page" class="content auth">
    <form id="register" @submit=${submitHandler}>
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </div>
    </form>
</section>
`;

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        const { email, password, ['confirm-password']: repass } = Object.fromEntries(formData);

        if (email == '' || password == '') {
            alert('all fields must be filled!');
            return;
        }

        if (repass != password) {
            alert('Pass missmatch!');
            return;
        }

        userService.register(email, password)
            .then(() => {
                ctx.page.redirect('/');
            });
    }

    ctx.render(registerTemplate(submitHandler));
}