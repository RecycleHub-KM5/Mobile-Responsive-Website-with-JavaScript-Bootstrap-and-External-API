const network = "https://652e3be3f9afa8ef4b283f4d.mockapi.io/";
const submit = document.getElementById("btn-submit");

// POST to register
submit.addEventListener("click", function () {
    const name = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)) {
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
            icon: "error",
            title: "Format email tidak sesuai!",
        });

        return 0;
    }

    if (password !== confirmPassword) {
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
            icon: "error",
            title: "Password tidak sama!",
        });
        return 0;
    }

    postData({
        url: `${network}/users`,
        data: {
            name,
            email,
            password,
            img: "https://i.ibb.co/gZyqXvV/dummy-ava.png",
        },
    })
        .then((res) => {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });

            Toast.fire({
                icon: "success",
                title: "Selamat, akun berhasil dibuat!",
            }).then(function () {
                window.location.href = "../pages/login.html";
            });
        })
        .catch((error) => {
            console.error("Error:", error.message);
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
                icon: "error",
                title: "Terjadi kesalahan sistem!",
            });
        });
});

async function postData({ url = "", data = {} }) {
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(async (result) => {
            if (result.status !== 200) {
                throw await result.json();
            } else {
                console.log("Success:", result);
            }
        })
        .catch((error) => {
            console.error("Error:", error.message);
        });
}

// Show or Hide password
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

function show_hide_confirmPassword() {
    var x = document.getElementById("confirm-password");
    var show_confirmpass = document.getElementById("show_confirmpass");
    var hide_confirmpass = document.getElementById("hide_confirmpass");
    hide_confirmpass.classList.remove("d-none");
    if (x.type === "password") {
        x.type = "text";
        show_confirmpass.style.display = "none";
        hide_confirmpass.style.display = "block";
    } else {
        x.type = "password";
        show_confirmpass.style.display = "block";
        hide_confirmpass.style.display = "none";
    }
}
