const menuBtn = document.getElementById("menuBtn");


const menu = document.getElementById("menu");

menuBtn.addEventListener("click" , function () {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
         menuBtn.textContent = "✕";
    } else {
        menu.classList.add("hidden");
        menuBtn.textContent = "☰";
    }

});
