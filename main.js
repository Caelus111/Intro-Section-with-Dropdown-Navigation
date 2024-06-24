const close = document.querySelector(".close");
const open = document.querySelector(".open");
const mobileMenu = document.getElementById("mobile-menu");






function openSidebar() {
  mobileMenu.style.display = "flex";
  open.classList.add('hide')
  close.style.display = "block";
}
function closeSidebar() {
  mobileMenu.style.display = "none";

  open.classList.remove("hide");
  close.style.display = "none";
}

open.addEventListener("click", openSidebar);
close.addEventListener("click", closeSidebar);
