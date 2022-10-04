import { html } from '../../node_modules/lit-html/lit-html.js';

import * as petsService from '../services/petsService.js';

const editTemplate = (pet, submitHandler) => html`
   <section id="editPage">
            <form class="editForm" @submit=${submitHandler}>
                <img src="/images/editpage-dog.jpg">
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" value=${pet.name}>
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" value=${pet.breed}>
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" value=${pet.age}>
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" value=${pet.weight}>
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" value=${pet.image}>
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>`;

export const editView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const petData = Object.fromEntries(new FormData(e.currentTarget));

        if (Object.values(petData).some(f => f =='')) {
            return alert('all fields are required');
        }

        petsService.edit(ctx.params.petId, petData)
            .then(() => {
                ctx.page.redirect(`/details/${ctx.params.petId}`);
            })
            .catch(err => {
                alert(err);
            });
    }
    petsService.getOne(ctx.params.petId)
        .then(pet => {
            ctx.render(editTemplate(pet, submitHandler));
        });
};
