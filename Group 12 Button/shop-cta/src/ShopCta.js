import { html, css, LitElement } from 'lit';
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class ShopCta extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--shop-cta-text-color, #000);
      }
      .button{
        background-color: #efefef;
        border-radius: 25px;
        padding: 8px 20px;
        transition: all 0.3s ease;
      }
      .button:hover{
        background-color: rgba(239, 239, 239, 0.5);
        font-weight: bold;
      }
      .button:disabled{
        opacity: 0.5;
        cursor: not-allowed;
      }
      .button:focus{
        background-color: rgba(239, 239, 239, 0.5);
        font-weight: bold;
        outline: none;
      }
    `;
  }

  static get properties() {
    return {
      link: {type: String, reflect: true},
      iconEnable: {type: Boolean, reflect: true},
      icon: {type: String, reflect: true},
      title: {type: String, reflect: true},
      isDisabled: {type: Boolean, reflect: true}
    };
  }

  constructor() {
    super();
    this.link = "https://nike.com";
    this.iconEnable = false;
    this.title = "Shop";
    this.icon = "shopping-cart";
    this.isDisabled = false;
  }

  

  render() {
    return html`
      <!--html button tag that also is a link and opens website in new tab-->
      
      <button ?disabled=${this.isDisabled} type="button" name="shop-button" class="button" onclick="window.open('${this.link}', '_blank')">
      ${this.iconEnable ?
      html`<simple-icon-lite icon="${this.icon}"></simple-icon-lite>`: html ``
      }
      ${this.title}
      </button>
      `;
  }
}
