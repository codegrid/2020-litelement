import { LitElement, html } from 'lit-element';

class Greeting extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.name = 'CodeGrid';
  }

  render() {
    return html`<p>Hello ${this.name}</p>`;
  }
}
customElements.define('x-greeting', Greeting);
