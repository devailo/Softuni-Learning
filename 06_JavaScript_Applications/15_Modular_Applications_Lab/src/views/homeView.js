import { html } from '../../node_modules/lit-html/lit-html.js'
import * as movieService from '../services/movieService.js';

const movieTemplate = (movie) => html`
<div class="card movie-card">
    <img class="card-img-top" src=${movie.posterUrl} alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <a href="/movies/${movie._id}" class="btn btn-primary">Details</a>
    </div>
</div>
`;

const homeTemplate = (movies) => html`
    <h1>Movie List</h1>

    <div class="movie-list">
        ${movies.map(x => movieTemplate(x))}
    </div>

`;

export const homeView = (ctx) => {
    //let [key, search] = ctx.querystring.split('=');
    let searchParams = new URLSearchParams(ctx.querystring);

    movieService.getAll(searchParams.get('search'))
        .then(movies =>{
            ctx.render(homeTemplate(movies));
        });
    
};