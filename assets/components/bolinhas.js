import { LitElement, css, html } from "lit";

export class Bolinhas extends LitElement {

  static get properties() {
    return {
      formato: { type: String },
    };
  }

  static styles = [
    css`
      :host {
        display: block;
        width: 100px;
        height: 100px;

      }

      .inteira {
        -webkit-mask: url("bolinhas.svg") no-repeat center;
        mask: url("bolinhas.svg") no-repeat center;
      }

      .fila-Preenchida {
        -webkit-mask: url("bolinhas-Preenchida.svg") no-repeat center;
        mask: url("bolinhas-Preenchida.svg") no-repeat center;
      }

      .fila-Vazia {
        -webkit-mask: url("bolinhas-Vazia.svg") no-repeat center;
        mask: url("bolinhas-Vazia.svg") no-repeat center;
      }


      .bolinhas {
        width: 100%;
        height: 100%;

        -webkit-mask-size: 100%;
        mask-size: 100%;
        background-color: var(--cor-bolinhas, black);
      }
    `,
  ];
/**
   * Define o formato das bolinhas
   * @returns Classe do formato
   */
  definirFormato() {
    if (this.formato === "fila-Preenchida") {
      return "fila-Preenchida";
    }
    if (this.formato === "fila-Vazia") {
      return "fila-Vazia";
    }
    if (this.formato === "metade") {
      return "metade";
    }
    return "inteira";
  }

  render() {
    return html` <div class=${`bolinhas ${this.definirFormato()}`}></div> `;
  }
}
customElements.define("app-bolinhas", Bolinhas);
