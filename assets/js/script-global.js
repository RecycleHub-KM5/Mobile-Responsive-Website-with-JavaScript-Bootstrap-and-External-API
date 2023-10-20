function getSession() {
    const status = localStorage.getItem("status");
    const session = JSON.parse(localStorage.getItem("session"));

    if (!status || !session) {
        return { status: false, profile: null };
    } else {
        return { status: true, profile: session };
    }
}
