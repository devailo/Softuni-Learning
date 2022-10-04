import { html } from '../../node_modules/lit-html/lit-html.js'
import * as authService from '../services/authService.js';

const loginTemplate = (loginHandler) => html`
    <div class="login-page">
        <h1>Login Page</h1>
    
        <form @submit=${loginHandler}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" name="password" class="form-control" id="exampleInputPassword1"
                    placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    
    </div>
`;

export const loginView = (ctx) => {
    const loginHandler = (e) => {
        e.preventDefault();
        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password)
            .then(user => {
                ctx.page.redirect('/');
                console.log('user is logged in');
            });

    }

    ctx.render(loginTemplate(loginHandler));
};