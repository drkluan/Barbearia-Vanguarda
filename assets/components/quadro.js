import { LitElement, html, css } from "lit";

export class Quadro extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        width: 20.875rem;
        height: 16.25rem;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 24px 34px 0px rgba(0, 0, 0, 0.25);

        overflow: hidden; 
      }
    `,
  ];

  render() {
    return html
    `<slot> coloque um imagem ai locao </slot>`;
  }
}
customElements.define("app-quadro", Quadro);
