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
      }
      .button:hover{
        background-color: rgba(239, 239, 239, 0.5);
      }
      .button:disabled{
        opacity: 0.5;
        cursor: not-allowed;
      }
      .button:focus{
        background-color: #D7D7D7;
        font-weight: bold;
        outline: none;
      }
    `;
  }

  static get properties() {
    return {

    };
  }

  constructor() {
    super();
  }

  

  render() {
    return html`
      <!--html button tag that also is a link and opens website in new tab-->
      <button type="button" name="shop-button" class="button" onclick="window.open('https://nike.com', '_blank')">Shop</button>
      <simple-icon-lite icon="shopping-cart"></simple-icon-lite>
      `;
  }
}
