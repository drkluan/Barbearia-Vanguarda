import { navbar } from "../main";

let prevScrollpos = window.pageYOffset;
export function animarScrollNavbar9() {

  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("escondido");
  } else {
    navbar.classList.add("escondido");
  }

  prevScrollpos = currentScrollPos;
}