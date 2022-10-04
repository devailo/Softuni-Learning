import * as request from './requester.js'

const baseUrl = 'http://localhost:3030'

const endpoints = {
    byGameId: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    create: '/data/comments'
}


export async function getByGameId(gameId){
    return request.get(baseUrl + endpoints.byGameId(gameId))
}

export async function postComment(comment){
    return request.post(baseUrl + endpoints.create, comment)
}