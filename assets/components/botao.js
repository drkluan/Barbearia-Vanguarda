import { LitElement, html, css } from "lit";

export class Botao extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      button {
        display: inline-flex;
        padding: 5px 24px;
        border: 0;
        justify-content: center;
        align-items: center;

        /* cor do botão */
        border-radius: 0.5rem;
        background-color: color-mixS(in srgb, white 20%, var(--tom-2, #b38962));
        box-shadow: 0px 2px 4px 0px #665e57;

        /* Tipografia */
        color: var(--color-secundaria, #664e38);
        text-align: center;
        font-family: var(--font-titulo);
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        white-space: nowrap;

        transition: all 200ms;
        cursor: pointer;
      }

      button:hover, button-active {
        background-color: var(--tom-2, #664e38);
      }
    `,
  ];

  render() {
    return html` <button><slot>Pressione</slot></button> `;
  }
}
customElements.define("app-botao", Botao);
