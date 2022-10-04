import * as albumService from '../services/albumService.js'

export const deleteView = async (ctx) => {

    try {
        const album = await albumService.getOne(ctx.params.albumId);

        let confirmed = confirm('Are you sure you want do delete the album?');

        if (confirmed) {
            await albumService.remove(ctx.params.albumId);
            ctx.page.redirect('/catalog');
        }

    } catch (err) {
        alert(err);
    }
}