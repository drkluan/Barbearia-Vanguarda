import { LitElement, html, css } from "lit";

export class Botao extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      ::slotted(button), button, ::slotted(a) {
        width: inherit;

        display: flex;
        padding: 5px 24px;
        border: 0;
        justify-content: flex-start;
        align-items: center;

        /* cor do botão */
        border-radius: 0.5rem;
        background-color: var(--button-background, color-mixS(in srgb, white 20%, var(--tom-2, #b38962)));
        box-shadow: 0px 2px 4px 0px #665e57;

        /* Tipografia */
        color: var(--color, color-mix(in srgb, black 20%, var(--color-3, #664e38)));
        text-align: center;
        font-family: var(--fonte-titulo);
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        white-space: nowrap;

        transition: all 200ms;
        cursor: pointer;
        text-decoration: none;
      }

      button:hover,
      button-active,
      a:hover
      a:active {
        background-color: color-mix(in srgb, white 15%, var(--button-background, var(--tom-2)));
        color: var(--tom-1)
      }
    `,
  ];

  render() {
    return html`
      <slot>
        <button> precione </button>
      </slot>
    `;
  }
}
customElements.define("app-botao", Botao);
