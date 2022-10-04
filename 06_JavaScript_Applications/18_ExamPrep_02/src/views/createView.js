import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as gamesService from '../services/gamesService.js'
import * as commentsService from '../services/commentsService.js'

const createTemplate = (submitHandler) => html`
        <section id="create-page" class="auth">
            <form id="create" @submit=${submitHandler}>
                <div class="container">
        
                    <h1>Create Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title...">
        
                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category...">
        
                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">
        
                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">
        
                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input class="btn submit" type="submit" value="Create Game">
                </div>
            </form>
        </section>`;



export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const gameData = Object.fromEntries(new FormData(e.currentTarget));

        // if (gameIsInvalid(gameData)) {
        //     alert('all field should be filled')
        //     return;
        // }

        if (Object.values(gameData).some(f => f =='')) {
            return alert('all fields are required');
        }

        gamesService.create(gameData)
            .then(() => {
                ctx.page.redirect('/');
            })
            .catch(err => {
                alert(err);
            });
    }
    ctx.render(createTemplate(submitHandler));
}
