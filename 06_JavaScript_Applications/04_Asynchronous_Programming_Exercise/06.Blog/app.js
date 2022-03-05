async function attachEvents() {
    let url = "http://localhost:3030/jsonstore/blog/";

    let loadPostsBtn = document.getElementById("btnLoadPosts");
    let viewBtn = document.getElementById("btnViewPost");
    let postsEl = document.getElementById("posts");
    let postTitleEl = document.getElementById("post-title");
    let postBodyEl = document.getElementById("post-body");
    let postCommentsEl = document.getElementById("post-comments");

    let response = await fetch(`${url}posts`);
    let data = await response.json();

    const onClickLoad = () => {
        for (const [key, value] of Object.entries(data)) {
            let optionEl = document.createElement("option");
            optionEl.value = key;
            optionEl.textContent = value.title.toUpperCase();

            postsEl.appendChild(optionEl);
        }
        let optionsEls = document.querySelectorAll("#posts option");
        let optionsElsArr = Array.from(optionsEls);
        if (optionsElsArr.length > 0) {
            loadPostsBtn.removeEventListener("click", onClickLoad);
        }
    }

    loadPostsBtn.addEventListener("click", onClickLoad);

    viewBtn.addEventListener("click", async () => {
        postCommentsEl.innerHTML = "";
        let allOptions = Array.from(postsEl.children);
        let selectedOption = allOptions.find((x) => x.selected === true);

        postTitleEl.textContent = data[selectedOption.value].title.toUpperCase();
        postBodyEl.textContent = data[selectedOption.value].body;

        let resComments = await fetch(`${url}comments`);
        let commentData = await resComments.json();

        for (const [_id, comData] of Object.entries(commentData)) {
            let liElement = document.createElement("li");

            if (comData.postId === selectedOption.value) {
                liElement.textContent = comData.text;
                liElement.setAttribute("id", _id);

                postCommentsEl.appendChild(liElement);
            }
        }
    });
}
attachEvents();