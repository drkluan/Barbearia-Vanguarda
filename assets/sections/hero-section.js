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
      }

      img {
        width: auto;
        height: 100%;
      }
      
      @media (min-whidt: 1024px){
        app-paragrafo {
          display: none;
        }

        app-logo {
          width: 220px;
          height: 220px;
        }
      }
    `,
  ];

  render() {
    return html`
      <section>
        <app-titulo>
          <h1>Barbearia<br><span>Vanguarda</span></h1>
          <app-logo></app-logo>
        </app-titulo>
        <app-quadro>
          <img src="slide-1.png" alt="Imagem slider 1" />
        </app-quadro>
      </section>
      <app-paragrafo>
        Obtenha um estilo empecavel,do cabelo a barba.
      </app-paragrafo>
    `;
  }
}
customElements.define("hero-section", HeroSection);
