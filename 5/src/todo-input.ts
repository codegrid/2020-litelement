import {
  html,
  LitElement,
  customElement,
  TemplateResult,
  property,
  css,
  CSSResult,
} from 'lit-element';

@customElement('my-todo-input')
class MyTodoInput extends LitElement {
  static get styles(): CSSResult {
    return css`
      input {
        width: 80%;
        height: 2.6em;
      }

      button {
        -webkit-appearance: none;
        height: 2.6em;
        width: 100px;
        border-color: #2175bb;
        background-color: #00A3E6;
        color: #fff;
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <form @submit=${this.onSubmit}>
        <input name="text" type="text">
        <button type="submit">Add</button>
      </form>
    `;
  }

  private onSubmit(ev) {
    ev.preventDefault();

    const input = ev.target.text

    this.dispatchEvent(new CustomEvent('mySubmit', {
      detail: { value: input.value },
    }));

    input.value = '';
  }
}
