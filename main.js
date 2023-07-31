import "/assets";
import { Router } from "@vaadin/router";
import { initRouter } from "./assets/router";
import { lazyLoadVideo } from "./modules/lazyLoadVideo";
import { animarScrollNavbar9 } from "./modules/animarScrollNavebar";
import { observarAnimacoes } from "./modules/observarAnimacoes";

export let navbar;
let dialog;
let router;

document.addEventListener("DOMContentLoaded", function () {
  router = initRouter();

  router.ready.then(() => {
    lazyLoadVideo()
    observarAnimacoes()
  });

  navbar = document.querySelector("app-navbar");

  dialog = document
    .querySelector("menu-section")
    .shadowRoot.querySelector("dialog");
});

export const nav = {
  abrir: function () {
    dialog.showModal();
    navbar.classList.add("escondido");
  },
  rolarPara: function (secao) {
    Router.go("/");
    router.ready.then(() => {
      document
        .querySelector("home-page")
        .shadowRoot.querySelector(secao)
        .scrollIntoView();

      this.fechar();
    });
  },

  fechar: function () {
    dialog.close();
  },
};

/* Navbar dinâmica ao scroll */
let prevScrollpos = window.pageYOffset;

/* janela . ao rolar = animarScrollNavbar */
window.onscroll = function () {
};
