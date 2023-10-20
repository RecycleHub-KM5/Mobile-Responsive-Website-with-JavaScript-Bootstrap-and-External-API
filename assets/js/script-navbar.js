const btnUser = document.getElementById("btn-wrapper-user");
const btnAuth = document.getElementById("btn-wrapper-auth");

let users = getSession();

if (users.status) {
    btnAuth.style.display = "none";
    btnUser.style.display = "block";

    document.querySelector(
        "#btn-user h3"
    ).textContent = `Hello, ${users.profile.name}`;
    document.querySelector("#btn-user img").src = users.profile.img;
} else {
    btnAuth.style.display = "block";
    btnUser.style.display = "none";
}

btnUser.addEventListener("click", function () {
    localStorage.removeItem("session");
    window.location.reload();
});
