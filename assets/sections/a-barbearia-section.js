import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class ABarbeariaSection extends LitElement {
  static styles = [
    section,

    css`
      :host {
        justify-content: space-between;
        align-items: fLex-start;
      }

      article {
        display: flex;
        padding: 0.5rem 0.8rem 0rem 0rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.625rem;

        background: var(--tom-1, #ead8c7);

        border: 3px solid;
        border-image-source: linear-gradient(
          42deg,
          rgba(102, 78, 56, 0) 50%,
          rgba(102, 78, 56, 1) 100%
        );
        border-image-slice: 1;

        border-left: 0;
        border-bottom: 0;
      }

      app-paragrafo {
        width: 270px;

        text-align: justify;
        line-height: 140%; /* 1.4rem */
        letter-spacing: -1.424px;
      }

      app-quadro {
        width: 20.9375rem;
        height: 20.9375rem;
        border-radius: 100%;

        position: absolute;
        right: -82px;
        top: 106px;
        z-index: -10;
      }

      app-bolinhas {
        display: flex;
        width: 300px;
        height: 300px;
        padding: 10px;
        justify-content: center;
        align-items: center;
        gap: 10px;

        position: absolute;
        left: -150px;
        top: 72px;
        z-index: -20;

        --cor-bolinhas: var(--tom-3);

      }

      img {
        width: 100%;
      }

      app-botao {
        display: var(--display-botao);
      }
    `,
  ];

  render() {
    return html`
      <app-titulo>A Barbearia</app-titulo>
      <app-bolinhas></app-bolinhas>
      <app-quadro><img src="a-barbearia.jpg" alt="Imagem Barbearia" /></app-quadro>
      <article>
        <app-paragrafo
          >Bem-vindo à Barbearia Vanguarda, onde tradição e inovação se
          encontram para proporcionar cortes de cabelo e barbas impecáveis. Com
          uma equipe de barbeiros especializados, combinamos técnicas
          tradicionais com as últimas tendências, garantindo um atendimento
          personalizado em um ambiente acolhedor.</app-paragrafo>
          
        <app-botao><a href="A-barbearia">Ver Mais</a></app-botao>
      </article>
    `;
  }
}
customElements.define("a-barbearia-section", ABarbeariaSection);
