import { html, LitElement, customElement, TemplateResult } from 'lit-element';

interface Item {
  text: string;
}

@customElement('my-todo')
class MyTodo extends LitElement {
  private data: Item[] = [];

  render(): TemplateResult {
    return html`
      <form @submit=${this.onSubmit}>
        <input name="text" type="text">
        <button type="submit">Add</button>
      </form>
      <ul>
        ${this.data.map(item => html`<li>${item.text}</li>`)}
      </ul>
    `;
  }

  private onSubmit(event) {
    event.preventDefault();
    const input = event.target.text;

    this.updateList(input.value);
    input.value = '';
  }

  private updateList(text) {
    this.data = this.data.concat({ text });
    this.requestUpdate();
  }
}
