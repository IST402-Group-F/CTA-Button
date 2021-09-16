import { html, css, LitElement } from 'lit';

export class ShopCta extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--shop-cta-text-color, #000);
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
    `;
  }
}
