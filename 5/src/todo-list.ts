import {
  html,
  LitElement,
  customElement,
  TemplateResult,
  property,
  css,
  CSSResult,
} from 'lit-element';

@customElement('my-todo-list')
class MyTodoList extends LitElement {
  @property({type: Array}) list = [];

  static get styles(): CSSResult {
    return css`
      ul {
        padding: 0;
      }

      li {
        list-style: none;
        width: 100%;
        height: 2em;
        border-bottom: 1px solid #ccc;
        padding: 10px 20px;
      }

      li:nth-child(2n) {
        background-color: #eee;
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <ul>
        ${this.list.map(item => html`<li>${item.text}</li>`)}
      </ul>
    `;
  }
}
