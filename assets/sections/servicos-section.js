import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class ServicosSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        padding: 2rem 0;
      }

      app-bolinhas {
        --cor-bolinhas: var(--tom-3);

        width: 270px;
        height: 23px;
      }

      app-bolinhas:first-child {
        transform: rotate(180deg);
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      span {
        color: var(--tom-3);
        font-weight: 600;
      }

      .titulo {
        width: 270px;
      }

      section {
        display: flex;
        align-items: center;
        gap: 36px;
        align-self: stretch;
      }

      aside {
        display: flex;
        padding: 96px 0px 8px 0px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
      }

      article {
        display: flex;
        width: 155px;
        height: 102px;
        padding-right: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
      }

      article app-paragrafo:first-child {
        color: var(--tom-3, #664e38);
        font-weight: 700;
      }

      .descricao {
        width: 108px;
        font-size: 0.875rem;
      }

      img {
        height: 120%;
      }

      app-quadro {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        width: 169px;
        height: 320px;
      }
    `,
  ];

  render() {
    return html`
      <app-paragrafo class="titulo">
        Estilo, cuidado e excelência em cada <span>corte</span></app-paragrafo
      >

      <section>
        <app-quadro
          ><img src="servicos-1.jpg" alt="Imagem servicos"
        /></app-quadro>

        <aside>
          <article>
            <app-paragrafo>Corte</app-paragrafo>
            <app-paragrafo class="descricao"
              >Social, defradê, surfista, militar, razor part,
              umdercut</app-paragrafo
            >
          </article>

          <app-botao> Ver Mais</app-botao>
        </aside>
      </section>

      <div>
        <app-bolinhas formato="fila-Vazia"></app-bolinhas>
        <app-bolinhas formato="fila-Preenchida"></app-bolinhas>
      </div>
    `;
  }
}
customElements.define("servicos-section", ServicosSection);
