import { LitElement, html, css } from "lit";
import { animate } from "../styles/animate-style";
import { section } from "../styles/section-style";

export class HeroSection extends LitElement {
  static styles = [
    section,
    animate,
    css`
    :host {
      --animate-duration: 0.3s;
    }
      section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }

      span {
        display: inline-block;
      }

      .vanguarda {
        color: var(--tom-3, #664e38);
        font-weight: 900;
      }

      app-titulo {
        display: flex;
        align-items: center;
        align-self: stretch;

        position: relative;
      }

      app-logo {
        width: 8rem;
        height: 8rem;
        position: absolute;
        right: -3.25rem;
        top: -1.375rem;
        z-index: 10;
      }

      img {
        width: auto;
        height: 100%;
      }

      swiper-container {
        width: 100%;
        height: 100%;
      }

      @keyframes slideInUp {
        0% {
          transform: translate3d(0px, 200%, 0px);
          visibility: visible;
        }
        100% {
          transform: translateZ(0px);
        }
      }

      @media (min-width: 768px) {
        app-logo {
          width: 220px;
          height: 220px;
        }
      }

      @media (min-widt: 1024px) {
        app-paragrafo {
          display: none;
        }
      }
    `,
  ];

  render() {
    return html`
      <section>
        <app-titulo>
          <h1>
            <span
              class="animate__animated animate__fast"
              data-toggle-class="animate__slideInUp"
              >Barbearia</span
            ><br />
            <span
              class="vanguarda animate__animated animate__delay-1s"
              data-toggle-class="animate__fadeInUp"
              >Vanguarda</span
            >
          </h1>
          <app-logo></app-logo>
        </app-titulo>
        <app-quadro>
          <swiper-container
            loop="true"
            autoplay="true"
            speed="5000"
            disabled-on-interection="false"
            effect="coverflow"
            simulatetouch="false"
            centered-slides="true"
            coverflow-effect-rotate="50"
            coverflow-effect-stretch="0"
            coverflow-effect-depth="100"
            coverflow-effect-modifier="1"
            coverflow-effect-slide-shadows="true"
          >
            <swiper-slide>
              <img src="slide-1.png" alt="Imagem slider 1" />
            </swiper-slide>
            <swiper-slide>
              <img loading="lazy" src="slider-2.jpg" alt="Imagem slider 2" />
            </swiper-slide>
            <swiper-slide>
              <img loading="lazy" src="slider-3.jpg" alt="Imagem slider 3" />
            </swiper-slide>
          </swiper-container>
        </app-quadro>
      </section>
      <app-paragrafo class="animate__animated animete__delay-5s"
              data-toggle-class="animate__fadeIn">
        Obtenha um estilo empecavel,do cabelo a barba.
      </app-paragrafo>
    `;
  }
}
customElements.define("hero-section", HeroSection);
