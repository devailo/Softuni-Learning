import { render } from '../../node_modules/lit-html/lit-html.js'
import { navigationView } from '../views/navigationView.js';


const headerElement = document.querySelector('.header-navigation');
const bodyElement = document.getElementById('main-content');

const ctxRender = (templateResult) => {
    render(templateResult,bodyElement)
}

export const renderNavigationMiddleware = (ctx, next) => {
    //render navigation

    render(navigationView(ctx), headerElement);
    next();
};

export const renderContentMiddleware = (ctx, next) => {
    ctx.render = ctxRender;

    next();
}