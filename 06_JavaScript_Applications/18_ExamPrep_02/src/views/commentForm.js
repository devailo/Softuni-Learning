import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as gamesService from '../services/gamesService.js'
import * as commentsService from '../services/commentsService.js'
import { createSubmitHandler } from '../services/authService.js';

const formTemplate = (onsubmit) => html`
<article class="create-comment">
    <label>Add new comment:</label>
    <form @submit=${onsubmit} class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment">
    </form>
</article>
`;

export function commentFormView(ctx, isOwner){
    if (ctx.user && !isOwner) {
        return formTemplate(createSubmitHandler(ctx, onSubmit));
    }else{
        return nothing;
    }
}

async function onSubmit(ctx, data, event){
    const gameId = ctx.params.id;

    if (data.comment == '') {
        return alert('all fields must be filled');
    }

    await commentsService.postComment({gameId, comment: data.comment});

    event.target.reset();
    ctx.page.redirect(`/details/${gameId}`);
}