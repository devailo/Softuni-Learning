import * as gamesService from '../services/gamesService.js'

export const deleteView = async (ctx) => {

    try {
        const game = await gamesService.getOne(ctx.params.gameId);

        let confirmed = confirm('Are you sure you want do delete the album?');

        if (confirmed) {
            await gamesService.remove(ctx.params.gameId);
            ctx.page.redirect('/');
        }

    } catch (err) {
        alert(err);
    }
}