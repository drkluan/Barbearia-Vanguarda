import { LitElement, html, css } from "lit";
import { nav } from "../../main";

export class MenuSection extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      dialog {
        display: flex;
        width: 100%;
        height: 100%;
       max-width: 100%;
        max-height: 100%;
        padding: 32px;
        border: 0;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        flex-shrink: 0;

        opacity: 0;
        pointer-events: none;
        transition: opacity 300ms;

        background-color: rgba(0, 0, 0, 40%);
        position: fixed;
        z-index: 110;
        margin: 0;
      }

      dialog[open] {
        opacity: 1;
        pointer-events: auto;
      
      }

      nav {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        align-self: flex-end;
        gap: 24px;
      }

      app-logo {
        width: 96px;
        height: 96px;
        background-color: white;
      }

      a {
        color: #fff;
        font-family: var(--fonte-titulo);
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
      }

      button {
        padding: 0;
        border: 0;
        background-color: transparent;
      }

      svg,
      feather-icon {
        display: flex;
        width: 24px;
        fill: white;
        color: white;
      }
    `,
  ];

  render() {
    return html`
      <dialog>
        <app-logo></app-logo>

        <nav>
          <a href="">Unidades<feather-icon icon="map-pin"></feather-icon></a>
          <a href="">Contato<feather-icon icon="phone"></feather-icon></a>
          <a href="">Serviços<feather-icon icon="scissors"></feather-icon></a>
          <a href=""
            >A Barbearia

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20">
              <path
                d="M18.3702 19.2905C18.343 19.3577 18.291 19.4158 18.2218 19.4563C18.1527 19.4968 18.07 19.5174 17.9859 19.5153H17.147L17.6681 17.3189C17.7305 17.423 17.7867 17.5298 17.8363 17.6387L18.3814 19.0761C18.4104 19.1461 18.4064 19.2229 18.3702 19.2905ZM0.0307174 19.2915C-0.00558695 19.2239 -0.00987645 19.147 0.0187316 19.0768L0.557607 17.6551C0.608985 17.5408 0.667328 17.4288 0.732408 17.3196L1.25351 19.5153H0.414621C0.339935 19.5159 0.266502 19.4991 0.20236 19.4668C0.138218 19.4344 0.085843 19.3878 0.0509658 19.332C0.0432147 19.3189 0.0364523 19.3054 0.0307174 19.2915ZM5.67857 17.5392C5.77464 17.6358 5.9003 17.7083 6.04182 17.7487L7.23651 19.5153H6.21827L5.67857 17.5392ZM6.93567 17.6628L8.0064 17.4055C8.33609 17.6512 8.76062 17.7868 9.20027 17.7868C9.63992 17.7868 10.0644 17.6512 10.3941 17.4055L11.4649 17.6628L10.2119 19.5153H8.18864L6.93567 17.6628ZM12.3587 17.7487C12.442 17.7246 12.5203 17.6895 12.5905 17.6446C12.6387 17.6136 12.6828 17.5782 12.722 17.5392L12.1823 19.5153H11.164L12.3587 17.7487ZM11.0062 12.9676C10.4955 13.3177 9.8579 13.5088 9.20027 13.5088C8.54264 13.5088 7.90501 13.3177 7.39437 12.9676C7.09683 12.7616 6.83236 12.5661 6.58028 12.3671C6.58441 12.402 6.59267 12.4369 6.5968 12.4683C6.64103 12.7765 6.66448 13.0866 6.66705 13.397L9.20027 15.2335L11.7335 13.397C11.736 13.0866 11.7595 12.7765 11.8037 12.4683C11.8079 12.4334 11.8161 12.402 11.8203 12.3671C11.5682 12.5661 11.3037 12.7616 11.0062 12.9676ZM2.31143 15.8864C1.6585 16.2879 1.55932 16.3577 1.52626 16.3856C1.47667 16.4275 1.43121 16.4764 1.38576 16.5183L2.09654 19.5139H3.30322L2.31143 15.8864ZM7.5762 16.3438L6.30753 15.7153V17.0874L7.5762 16.7837C7.5582 16.7113 7.54851 16.6376 7.54727 16.5637C7.54874 16.4898 7.55842 16.4161 7.5762 16.3438ZM7.5762 16.3438L6.30753 15.7153V17.0874L7.5762 16.7837C7.5582 16.7113 7.54851 16.6376 7.54727 16.5637C7.54874 16.4898 7.55842 16.4161 7.5762 16.3438ZM4.24956 15.3522C3.8475 15.3739 3.45104 15.4433 3.07181 15.5582L4.15038 19.5139H5.36946L4.25369 15.422C4.2482 15.3991 4.2468 15.3755 4.24956 15.3522ZM7.5762 16.3438L6.30753 15.7153V17.0874L7.5762 16.7837C7.5582 16.7113 7.54851 16.6376 7.54727 16.5637C7.54874 16.4898 7.55842 16.4161 7.5762 16.3438ZM7.5762 16.3438L6.30753 15.7153V17.0874L7.5762 16.7837C7.5582 16.7113 7.54851 16.6376 7.54727 16.5637C7.54874 16.4898 7.55842 16.4161 7.5762 16.3438ZM9.20027 16.04C8.75396 16.04 8.37377 16.2809 8.37377 16.5637C8.37377 16.85 8.75396 17.0874 9.20027 17.0874C9.64657 17.0874 10.0268 16.85 10.0268 16.5637C10.0268 16.2809 9.64657 16.04 9.20027 16.04ZM14.151 15.3522C14.1537 15.3755 14.1523 15.3991 14.1468 15.422L13.0311 19.5139H14.2501L15.3287 15.5582C14.9495 15.4433 14.553 15.3739 14.151 15.3522ZM16.8743 16.3856C16.8412 16.3577 16.742 16.2879 16.0891 15.8864L15.0973 19.5139H16.304L17.0148 16.5183C16.9693 16.4764 16.9239 16.4275 16.8743 16.3856ZM9.20027 16.04C8.75396 16.04 8.37377 16.2809 8.37377 16.5637C8.37377 16.85 8.75396 17.0874 9.20027 17.0874C9.64657 17.0874 10.0268 16.85 10.0268 16.5637C10.0268 16.2809 9.64657 16.04 9.20027 16.04ZM9.20027 16.04C8.75396 16.04 8.37377 16.2809 8.37377 16.5637C8.37377 16.85 8.75396 17.0874 9.20027 17.0874C9.64657 17.0874 10.0268 16.85 10.0268 16.5637C10.0268 16.2809 9.64657 16.04 9.20027 16.04ZM10.8243 16.3438C10.8421 16.4161 10.8518 16.4898 10.8533 16.5637C10.852 16.6376 10.8423 16.7113 10.8243 16.7837L12.093 17.0874V15.7153L10.8243 16.3438ZM9.20027 16.04C8.75396 16.04 8.37377 16.2809 8.37377 16.5637C8.37377 16.85 8.75396 17.0874 9.20027 17.0874C9.64657 17.0874 10.0268 16.85 10.0268 16.5637C10.0268 16.2809 9.64657 16.04 9.20027 16.04ZM9.20027 16.04C8.75396 16.04 8.37377 16.2809 8.37377 16.5637C8.37377 16.85 8.75396 17.0874 9.20027 17.0874C9.64657 17.0874 10.0268 16.85 10.0268 16.5637C10.0268 16.2809 9.64657 16.04 9.20027 16.04ZM7.5762 16.3438L6.30753 15.7153V17.0874L7.5762 16.7837C7.5582 16.7113 7.54851 16.6376 7.54727 16.5637C7.54874 16.4898 7.55842 16.4161 7.5762 16.3438ZM12.0723 14.0743L10.064 15.5268C10.1903 15.5845 10.307 15.6561 10.4111 15.7397L11.8079 15.0484C11.8468 15.0274 11.8904 15.0131 11.936 15.0065C12.0554 14.9871 12.1784 14.9902 12.2963 15.0155C12.4141 15.0409 12.5239 15.0879 12.6178 15.1532C12.7607 15.2518 12.8598 15.3884 12.8988 15.5407L13.2294 15.0519L12.0723 14.0743ZM14.0807 6.79131C14.053 6.80149 14.0238 6.80854 13.9939 6.81226C13.972 6.82225 13.9513 6.83394 13.9319 6.84717C13.7531 7.50877 13.674 8.18682 13.6964 8.86519C13.75 8.92518 13.8109 8.98018 13.8782 9.02929C13.9774 8.87567 14.1592 8.38687 14.1592 7.29407C14.1709 7.12379 14.1443 6.95319 14.0807 6.79131ZM13.7956 0.0459436C13.4732 -0.118152 12.8162 0.185599 12.1178 0.510298C11.2624 0.908316 10.2912 1.35871 9.20027 1.35871C4.43965 1.35871 3.82805 2.75875 3.82805 3.97725C3.82619 4.13622 3.84001 4.29504 3.86937 4.45208C3.94902 4.9576 4.15466 5.44312 4.47271 5.87656L6.35299 3.84807C6.43952 3.74453 6.55008 3.65696 6.67794 3.59067C6.8058 3.52438 6.9483 3.48076 7.09674 3.46247C7.24519 3.44418 7.39648 3.4516 7.54143 3.48428C7.68637 3.51696 7.82193 3.57421 7.93986 3.65255C8.30066 3.88658 8.74263 4.01373 9.1975 4.01436C9.65237 4.01499 10.0948 3.88907 10.4565 3.65604C10.5743 3.57695 10.71 3.51901 10.8552 3.48574C11.0003 3.45247 11.1521 3.44458 11.301 3.46255C11.4499 3.48053 11.5929 3.52399 11.7213 3.59028C11.8497 3.65656 11.9607 3.74428 12.0475 3.84807L13.8204 5.76135L14.0105 5.76484C14.3777 5.22009 14.5714 4.60416 14.5725 3.97725C14.5725 1.04797 14.151 0.220513 13.7956 0.0459436ZM4.46858 6.85066C4.44408 6.83357 4.4178 6.81837 4.39007 6.80527C4.36632 6.8019 4.34285 6.79724 4.31981 6.79131C4.25577 6.9531 4.22912 7.12378 4.2413 7.29407C4.2413 8.38687 4.42312 8.87567 4.5223 9.02929C4.58962 8.98018 4.65057 8.92518 4.70413 8.86519C4.72658 8.18797 4.64743 7.51108 4.46858 6.85066ZM11.3987 4.281C11.3771 4.251 11.3484 4.22511 11.3143 4.20497C11.2802 4.18483 11.2416 4.17087 11.2008 4.16398C11.16 4.15709 11.118 4.15742 11.0774 4.16494C11.0368 4.17246 10.9985 4.18701 10.9648 4.20768C10.4592 4.53514 9.8401 4.71291 9.20303 4.71354C8.56595 4.71417 7.94634 4.53763 7.43983 4.21117C7.40633 4.18982 7.36791 4.17461 7.32705 4.16653C7.28619 4.15845 7.24377 4.15767 7.20253 4.16424C7.16129 4.17082 7.12213 4.1846 7.08756 4.2047C7.05299 4.22481 7.02378 4.2508 7.00179 4.281L5.1587 6.27109C5.16284 6.28506 5.16697 6.30251 5.1711 6.31997C5.17524 6.33657 5.18077 6.3529 5.18763 6.36885V6.37932C5.51038 7.39107 5.61398 8.44378 5.49344 9.48666C5.48517 9.55649 5.48104 9.6333 5.48104 9.71011C5.48104 10.3874 6.34472 11.3511 7.91506 12.4229C8.27808 12.6724 8.73157 12.8089 9.19953 12.8096C9.6675 12.8102 10.1215 12.6749 10.4855 12.4264C12.0558 11.3511 12.9195 10.3874 12.9195 9.71011C12.9195 9.6333 12.9154 9.55649 12.9071 9.47968C12.792 8.47051 12.8857 7.45212 13.184 6.4701C13.1881 6.45962 13.1922 6.43868 13.2005 6.41773L13.2212 6.35488C13.2294 6.32695 13.2336 6.29902 13.2418 6.2676L11.3987 4.281ZM8.78702 9.3889H9.61351C9.72311 9.3889 9.82823 9.42568 9.90573 9.49116C9.98322 9.55664 10.0268 9.64544 10.0268 9.73804C10.0268 9.83064 9.98322 9.91944 9.90573 9.98492C9.82823 10.0504 9.72311 10.0872 9.61351 10.0872H8.78702C8.67742 10.0872 8.57231 10.0504 8.49481 9.98492C8.41731 9.91944 8.37377 9.83064 8.37377 9.73804C8.37377 9.64544 8.41731 9.55664 8.49481 9.49116C8.57231 9.42568 8.67742 9.3889 8.78702 9.3889ZM7.54727 7.64321V7.99235C7.54727 8.08494 7.50374 8.17375 7.42624 8.23922C7.34874 8.3047 7.24363 8.34148 7.13403 8.34148C7.02443 8.34148 6.91931 8.3047 6.84181 8.23922C6.76431 8.17375 6.72078 8.08494 6.72078 7.99235V7.64321H6.30753C6.19793 7.64321 6.09282 7.60642 6.01532 7.54095C5.93782 7.47547 5.89428 7.38667 5.89428 7.29407C5.89428 7.20147 5.93782 7.11266 6.01532 7.04719C6.09282 6.98171 6.19793 6.94493 6.30753 6.94493H7.96052C8.07012 6.94493 8.17523 6.98171 8.25273 7.04719C8.33023 7.11266 8.37377 7.20147 8.37377 7.29407C8.37377 7.38667 8.33023 7.47547 8.25273 7.54095C8.17523 7.60642 8.07012 7.64321 7.96052 7.64321H7.54727ZM10.0268 11.4837H8.37377C8.26417 11.4837 8.15906 11.4469 8.08156 11.3815C8.00406 11.316 7.96052 11.2272 7.96052 11.1346C7.96052 11.042 8.00406 10.9532 8.08156 10.8877C8.15906 10.8222 8.26417 10.7855 8.37377 10.7855H10.0268C10.1364 10.7855 10.2415 10.8222 10.319 10.8877C10.3965 10.9532 10.44 11.042 10.44 11.1346C10.44 11.2272 10.3965 11.316 10.319 11.3815C10.2415 11.4469 10.1364 11.4837 10.0268 11.4837ZM12.093 7.64321H11.6798V7.99235C11.6798 8.08494 11.6362 8.17375 11.5587 8.23922C11.4812 8.3047 11.3761 8.34148 11.2665 8.34148C11.1569 8.34148 11.0518 8.3047 10.9743 8.23922C10.8968 8.17375 10.8533 8.08494 10.8533 7.99235V7.64321H10.44C10.3304 7.64321 10.2253 7.60642 10.1478 7.54095C10.0703 7.47547 10.0268 7.38667 10.0268 7.29407C10.0268 7.20147 10.0703 7.11266 10.1478 7.04719C10.2253 6.98171 10.3304 6.94493 10.44 6.94493H12.093C12.2026 6.94493 12.3077 6.98171 12.3852 7.04719C12.4627 7.11266 12.5062 7.20147 12.5062 7.29407C12.5062 7.38667 12.4627 7.47547 12.3852 7.54095C12.3077 7.60642 12.2026 7.64321 12.093 7.64321ZM6.3282 14.0743L5.1711 15.0519L5.5017 15.5407C5.54818 15.3633 5.67483 15.2081 5.85467 15.1083C6.0345 15.0086 6.25333 14.972 6.46456 15.0065C6.51016 15.0131 6.55373 15.0274 6.59268 15.0484L7.98945 15.7397C8.09349 15.6561 8.21022 15.5845 8.33658 15.5268L6.3282 14.0743Z"
              />
            </svg>
          </a>
          <a href="/">Home<feather-icon icon="home"></feather-icon></a>

          <button @click=${nav.fechar}>
            <feather-icon icon="x"></feather-icon>
          </button>
        </nav>
      </dialog>
    `;
  }
}
customElements.define("menu-section", MenuSection);