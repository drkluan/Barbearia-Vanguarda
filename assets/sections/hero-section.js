import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class HeroSection extends LitElement {
  static styles = [
    section,
    css`
      section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }

      span {
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
          <h1>Barbearia<br /><span>Vanguarda</span></h1>
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
      <app-paragrafo>
        Obtenha um estilo empecavel,do cabelo a barba.
      </app-paragrafo>
    `;
  }
}
customElements.define("hero-section", HeroSection);
