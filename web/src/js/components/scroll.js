export default () => {
    const body = document.body;

    if (body.classList.contains("homePage")) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 1) {
                body.classList.remove("homePage");
            } else {
                body.classList.add("homePage");
            }
        });
    }
};
