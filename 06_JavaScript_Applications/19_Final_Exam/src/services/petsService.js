import * as request from './requester.js'

const baseUrl = 'http://localhost:3030'

const endpoints = {
    allPets: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    create: '/data/pets',
    byId: '/data/pets/'
}

export async function getAll(){
    return request.get(baseUrl + endpoints.allPets);
}

export async function getOne(id) {
    return request.get(baseUrl + endpoints.byId + id)
}

export const create = (petData) => request.post(baseUrl + endpoints.create, petData);

export const remove = (id) => request.del(baseUrl + endpoints.byId + id);

export const edit = (id, petData) => request.put(baseUrl + endpoints.byId + id, petData);
