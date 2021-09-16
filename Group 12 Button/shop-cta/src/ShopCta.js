import { html, css, LitElement } from 'lit';

export class ShopCta extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--shop-cta-text-color, #000);
      }
      .button1{
        background-color: #4CAF50;
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
      <button type="button" name="shop-button" class="button1">Shop</button>
    `;
  }
}
