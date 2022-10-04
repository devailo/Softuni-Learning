import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as gamesService from '../services/gamesService.js'
import * as commentsService from '../services/commentsService.js'

const commentsTemplate = (comments) => html`
<div class="details-comments">
    <h2>Comments:</h2>
    ${comments.legth > 0
    ? commentsList(comments)
    : html`<p class="no-comment">No comments.</p>`}
    
</div>`;

const commentsList = (comments) => html`
<ul>
        ${comments.map(commentCard)}
</ul>`;

const commentCard = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`;

export async function commentsView(gameId) {
    const comments = await commentsService.getByGameId(gameId);
    return commentsTemplate(comments);
}