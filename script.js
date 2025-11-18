const leftItems = document.querySelectorAll(".left-item");

leftItems.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".left-item.active")?.classList.remove("active");
        item.classList.add("active");
    });
});
