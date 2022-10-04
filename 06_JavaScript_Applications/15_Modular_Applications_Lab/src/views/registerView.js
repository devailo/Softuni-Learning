import { html } from '../../node_modules/lit-html/lit-html.js'
import * as authService from '../services/authService.js';

const registerTemplate = (registerHandler) => html`
    <div class="login-page">
        <h1>Register Page</h1>
    
        <form @submit=${registerHandler}>
       
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
            <div class="form-group">
                <label for="username">Username</label>
                <input type="username" name="username" class="form-control" id="username"
                    placeholder="username">
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    
    </div>
`;

export const registerView = (ctx) => {
    const registerHandler = (e) => {
        e.preventDefault();
        let { email, password, username } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password, username)
            .then(user => {
                ctx.page.redirect('/');
                console.log('user is registered');
            });

    }

    ctx.render(registerTemplate(registerHandler));
};