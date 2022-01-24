function extract(content) {
    let contentElement = document.getElementById('content');

    let pattern = /\(([^(]+)\)/g;
    let matches = contentElement.textContent.matchAll(pattern);
    let result = [];
    for (const match of matches) {
        console.log(match[1]);
        result.push(match[1]);
    }

    return result.join('; ');
}