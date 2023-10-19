const network = "https://652e3be3f9afa8ef4b283f4d.mockapi.io/";
const submit = document.getElementById("btn-submit");

// Fetch login
submit.addEventListener("click", function (e) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    fetch(`${network}/users`)
        .then((response) => response.json())
        .then((users) => {
            const isUserExist = users?.find(
                (item) => item.email === email && item.password === password
            );

            if (!isUserExist) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                });

                Toast.fire({
                    icon: "warning",
                    title: "Email atau Password salah!",
                });

                return 0;
            }

            localStorage.setItem(
                "session",
                JSON.stringify({
                    id: isUserExist.id,
                    name: isUserExist.name,
                    img: isUserExist.img,
                })
            );
            localStorage.setItem("status", true);

            if (document.referrer.includes("/pages/register.html")) {
                window.location.href = "../index.html";
            } else {
                history.back();
            }
        });
});

// Show or hide password
function show_hide_password() {
    var x = document.getElementById("password");
    var show_pass = document.getElementById("show_pass");
    var hide_pass = document.getElementById("hide_pass");
    hide_pass.classList.remove("d-none");
    if (x.type === "password") {
        x.type = "text";
        show_pass.style.display = "none";
        hide_pass.style.display = "block";
    } else {
        x.type = "password";
        show_pass.style.display = "block";
        hide_pass.style.display = "none";
    }
}
