import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-style';

export class ServicosSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('servicos-section', ServicosSection);
