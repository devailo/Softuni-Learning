import * as request from './requester.js';
import * as authService from './authService.js'

const baseUrl = 'http://localhost:3030/users'

export async function login(email, password) {
    const user = await request.post(`${baseUrl}/login`, { email, password });
    authService.saveUser(user);
    return user;
}

export const register = (email, password) =>
    request.post(`${baseUrl}/register`, { email, password })
        .then(user => {
            authService.saveUser(user);
            return user;
        });

export const logout = () =>
    fetch(`${baseUrl}/logout`,  { headers: { 'X-Authorization': authService.getToken() } })
        .then(() => {
            authService.deleteUser();
        });
