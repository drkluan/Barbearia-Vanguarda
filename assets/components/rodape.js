import { LitElement, html, css } from 'lit';

export class Rodape extends LitElement {
    static styles = [
        css`
            :host {
                display: block;

                font-family: Var(--fonte-titulo);
                font-size: .75rem;
                color: white;
            }

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 2rem;
                font-size: .5rem;
                background-color: color-mix(in srgb, black 40%, var(--tom-3))

            }

            footer {
                display: flex;
                justify-content: space-between;
                background-color: color-mix(in srgb, black 40%, var(--tom-2));
                padding: 2rem;
                align-items: center;
            }
            
            nav {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 1rem;
                opacity: .9;
            }

            app-logo{
                width: 4rem;
                height: 4rem;
                background-color: white;
                
            }

            a {
                color: white;
                text-decoration: none;
            }
        `
    ];

    render() {
        return html`
        <footer>
            <app-logo></app-logo>
            <nav>
                <a href="">Unidades</a>
                <a href="">Contato</a>
                <a href="">Serviços</a>
                <a href="">A-Barbearia</a>
                <a href="/">Home</a>
            </nav>

        </footer>
        <span>
        © Barbearia Vanguarda - Todos os direitos reservados desde 2023.
        </span>
        `;
    }
}
customElements.define('app-rodape', Rodape);
