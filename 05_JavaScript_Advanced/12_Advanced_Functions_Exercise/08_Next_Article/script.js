function getArticleGenerator(input) {
    let articles = input;

    return () => {
        while (articles.length) {
            let container = document.getElementById('content');
            let article = document.createElement('article');
            article.innerText = articles.shift();
            container.appendChild(article);
            break;
        }
    }
}
