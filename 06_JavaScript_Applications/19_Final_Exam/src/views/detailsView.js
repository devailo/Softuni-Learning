import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as petsService from '../services/petsService.js'

const detailsTemplate = (pet, ctx, onDelete) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
        <img src=${pet.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: 0$</h4>
            </div>
            
            ${ctx.user 
                ? html`                
                <div class="actionBtn">
                    ${pet.isOwner
                    ? html`
                    <a href="/details/${pet._id}/edit" class="edit">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`
                    : html`<a href="#" class="donate">Donate</a>`}
                </div>`
                    : nothing
            }
        </div>
    </div>
</section>`;


                    

export async function detailsView(ctx) {
    const pet = await petsService.getOne(ctx.params.id)

    if (ctx.user) {
        pet.isOwner = pet._ownerId == ctx.user._id;
    }
    async function onDelete(){
        let confirmed = confirm('Are you sure you want do delete this game?');

            if (confirmed) {
                await petsService.remove(ctx.params.id);
                ctx.page.redirect('/');
                } 
            }
        ctx.render(detailsTemplate(pet, ctx, onDelete));
    };

