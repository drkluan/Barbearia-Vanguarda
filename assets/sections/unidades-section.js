import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class UnidadesSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        height: fit-content;
        gap: 32px;
        padding: 0 0 4rem 0;
      }

      app-paragrafo {
        width: 270px;
      }

      app-bolinhas {
        display: flex;
        width: 104px;
        height: 208px;
        transform: rotate(90deg);
        align-items: flex-start;
        --cor-bolinhas: var(--tom-3);
        

        position: absolute;
        left: -64px;
        top: -56px;
        z-index: -10;
      }

      swiper-container {
        width: 100svw;
        height: 300px;

        position: relative;
        left: 50%;
        transform: translateX(-50%)
       
      }

      swiper-slide {
        display: flex;
        justify-content: center;
        padding-top: 1rem;
        transition: transform 500ms;
      }

      .swiper-slide-active { 
        transform: scale(1.1)

      }

      @media (min-width: 728px){
        app-paragrafo {
          width: 100%;
          max-width: 500px;
          text-align: center;
        }

        app-mapa {
          width: 400px;
          height: 300px;
        }

        swiper-container {
          height: 400px;
        }
      }
    `,
  ];

  firstUpdated() {
    const swiper = this.renderRoot.querySelector('swiper-container')

    // space-between="-75" initial-slide "1" rewind="true"
    Object.assign(swiper, {
      spaceBetween: -75,
      initialSlide: 1,
      rewind: true,
      breakpoints: {
        768: {
          spaceBetween: -275
        },
        1024: {
          spaceBetween: -575
        },
        1368: {
          spaceBetween: 300,
          slidesPerView: 3,
          centeredSlides: true,
        },
      }
    })

    swiper.initialize()
  }
  render() {
    return html`
      <app-paragrafo>
        Nossa sede, localizada na zona leste de São Paulo, e as demais unidades,
        estão abertas todos os dias. <br />
        <br />
        Confira os horários específicos de cada unidade.
      </app-paragrafo>

      <swiper-container init="false">
        <swiper-slide>
          <app-mapa></app-mapa>
        </swiper-slide>
        <swiper-slide>
          <app-mapa><img slot="imagem" loading="lazy" src="mapa-2.jpg" alt="Imagem mapa 2" /></app-mapa>
        </swiper-slide>
        <swiper-slide>
          <app-mapa><img slot="imagem" loading="lazy" src="mapa-3.jpg" alt="Imagem mapa 3" /></app-mapa>
        </swiper-slide>
        <swiper-slide>
          <app-mapa><img slot="imagem" loading="lazy" src="mapa-4.jpg" alt="Imagem mapa 4" /></app-mapa>
        </swiper-slide>
      </swiper-container>

      <app-bolinhas formato="fila-metade"></app-bolinhas>
    `;
  }
}
customElements.define("unidades-section", UnidadesSection);
