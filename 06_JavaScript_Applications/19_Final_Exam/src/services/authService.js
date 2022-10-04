export function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export const getToken = () => {
    return getUser()?.accessToken;
}

export function deleteUser(){
    localStorage.removeItem('user');
}

export function saveUser(data){
    localStorage.setItem('user', JSON.stringify(data));
}

export function createSubmitHandler(ctx, handler){
    return function (event){
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.target));

        handler(ctx, formData, event);
    };
}
