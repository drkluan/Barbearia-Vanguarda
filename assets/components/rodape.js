import { LitElement, html, css } from 'lit';
import { nav } from '../../main';

export class Rodape extends LitElement {
    static styles = [
        css`
            :host {
                display: block;

                color: white;
            }

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 2rem;
                font-size: .5rem;
                font-family: Var(--fonte-titulo);
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

            a, button {
                font-size: .75rem;
                font-family: Var(--fonte-titulo);
                color: white;
                text-decoration: none;
                opacity: 0.9;

                cursor: pointer;
            }

            a:hover, button:hover {
                color: var(--tom-1)
            }

            a:active, button:active {
                color: var(--tom-1)
            }

            button {
                padding: 0;
                border: 0;
                background: transparent;
            }

            @media (min-width: 1024px){ 
                :host{
                    border-radius: 2rem 2rem 0 0;
                    overflow: hidden;
                }
            }
        `
    ];

    rolarContato(){
        return nav.rolarPara('#contato')
    }

    rolarUnidades(){
        return nav.rolarPara('#Unidades')
    }

    render() {
        return html`
        <footer>
            <app-logo></app-logo>
            <nav>
                <button @click=${this.rolarUnidades}>Unidades</button>
                <button @click=${this.rolarContato}>Contato</button>
                <a href="">Serviços</a>
                <a href="a-barbearia">A-Barbearia</a>
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
