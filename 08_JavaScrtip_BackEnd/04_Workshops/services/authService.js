
async function login(username, password) {
    return new Promise((res, rej) => {
        if (username.toLowerCase() == 'peter' && password == '123456') {
            res({
                _id: '234hj235hh543cebf',
                username: 'Peter',
                roles:['user']
            })
        }else{
            rej(new Error('Incorret username or password'))
        }
    })
}

module.exports = {
    login
}