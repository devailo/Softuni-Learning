import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as gamesService from '../services/gamesService.js'
import { commentFormView } from './commentForm.js';
import { commentsView } from './commentsView.js';


const detailsTemplate = (game, commentsSection, commentFormSection, onDelete) => html`
 <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src=${game.imageUrl} />
                    <h1>${game.title}</h1>
                    <span class="levels">MaxLevel: ${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>

                <p class="text">
                ${game.summary}
                </p>

                <!-- Bonus ( for Guests and Users ) -->
              ${commentsSection}

                <!-- Edit/Delete buttons ( Only for creator of this game )  -->

                ${game.isOwner 
                    ? html`<div class="buttons">
                    <a href="/details/${game._id}/edit" class="button">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
                   <!--  <a href="/details/${game._id}/delete" class="button">Delete</a> -->
                </div>`
                    : nothing
                    }
                
            </div>

            <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
           ${commentFormSection}

        </section>
`;
                    

export async function detailsView(ctx) {

            const gameId = ctx.params.id;
            const [game, commentsSection] = await Promise.all([
                gamesService.getOne(gameId),
                commentsView(gameId)
            ]);

            if (ctx.user) {
                game.isOwner = game._ownerId == ctx.user._id;
            }
            
            const commentFormSection = commentFormView(ctx, game.isOwner);

            async function onDelete(){
            let confirmed = confirm('Are you sure you want do delete this game?');

            if (confirmed) {
                await gamesService.remove(ctx.params.id);
            ctx.page.redirect('/');
            } 
            }

            ctx.render(detailsTemplate(game, commentsSection, commentFormSection, onDelete));
        };


// export async function detailsView(ctx){
//     const gameId = ctx.params.id;
//     const game = await gamesService.getOne(gameId);
//     ctx.render(detailsTemplate(game));
// }
