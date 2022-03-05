async function lockedProfile() {
    const url = await fetch("http://localhost:3030/jsonstore/advanced/profiles");
    let profiles = await url.json();

    let mainElement = document.getElementById("main");
    mainElement.innerHTML = "";

    for (const [, profile] of Object.entries(profiles)) {
        mainElement.innerHTML += `
        <div class="profile">
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user1Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user1Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user1Username" value="${profile.username}" disabled readonly />
        <div class="hiddenInfo">
            <hr>
            <label>Email:</label>
            <input type="email" name="user1Email" value="${profile.email}" disabled readonly />
            <label>Age:</label>
            <input type="email" name="user1Age" value="${profile.age}" disabled readonly />
        </div>
        <button>Show more</button>
        </div>`;
    }

    let buttons = Array.from(mainElement.querySelectorAll("button"));
    buttons.forEach((x) => {
        x.addEventListener("click", (ev) => {
            let container = ev.currentTarget.previousElementSibling;
            let parent = ev.currentTarget.parentNode;
            let unlockElement = parent.querySelector('input[value="unlock"]');

            if (unlockElement.checked && ev.currentTarget.textContent == "Show more") {
                container.style.display = "inline-block";
                let children = Array.from(container.children);
                children.forEach((x) => (x.style.display = "block"));
                ev.currentTarget.textContent = "Hide it";
            } else if (unlockElement.checked && ev.currentTarget.textContent == "Hide it") {
                container.style.display = "none";
                ev.currentTarget.textContent = "Show more";
            }
        });
    });
}