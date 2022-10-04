import * as request from './requester.js'

const baseUrl = 'http://localhost:3030'

const endpoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    games: '/data/games?sortBy=_createdOn%20desc',
    create: '/data/games',
    byId: '/data/games/'
}

export async function getRecent(){
    return request.get(baseUrl + endpoints.recent);
}

export async function getAll(){
    return request.get(baseUrl + endpoints.games);
}

export async function getOne(id) {
    return request.get(baseUrl + endpoints.byId + id)
}

export const create = (gameData) => request.post(baseUrl + endpoints.games, gameData);

export const remove = (id) => request.del(baseUrl + endpoints.byId + id);

export const edit = (id, gameData) => request.put(baseUrl + endpoints.byId + id, gameData);
