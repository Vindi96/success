export default () => {
    const buttons = document.querySelectorAll(".btn"); // Select all buttons

    buttons.forEach((btn) => {
        btn.addEventListener("mouseover", function () {
            btn.classList.add("hovered");
            btn.classList.remove("hovered-off");
        });

        btn.addEventListener("mouseout", function () {
            btn.classList.remove("hovered");
            btn.classList.add("hovered-off");
        });
    });
};
