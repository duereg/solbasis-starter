function toggleNav() {
  const hamburger = document.getElementById("hamburgerbtn");
  const overlay = document.getElementById("overlay");
  const body = document.body;

  hamburger.addEventListener("click", function () {
    overlay.classList.toggle("open");
    hamburger.classList.toggle("is-open");
    body.classList.toggle("scroll-lock");
  });

  document.querySelector('.scroll-top').addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });
}

window.onload = toggleNav;
