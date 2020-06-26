import { customElement, LitElement, property, html } from "lit-element";

@customElement('x-greeting')
export default class Greeting extends LitElement {
  @property() name = 'CodeGrid';

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

