import {
  html,
  LitElement,
  customElement,
  TemplateResult,
  css,
  CSSResult
} from 'lit-element';

@customElement('my-todo')
class MyTodo extends LitElement {
  private data = [];

  static get styles(): CSSResult {
    return css`
    `;
  }

  connectedCallback() {
    const stored = JSON.parse(sessionStorage.getItem('codegrid-todo'));
    this.data = stored !== null ? stored : [];
    super.connectedCallback();
  }

  render(): TemplateResult {
    return html`
      <my-todo-input @mySubmit=${this.onSubmit}></my-todo-input>
      <my-todo-list list=${JSON.stringify(this.data)}></my-todo-list>
    `;
  }

  private onSubmit(event) {
    this.updateList(event.detail.value);
    sessionStorage.setItem('codegrid-todo', JSON.stringify(this.data))
  }

  private updateList(text) {
    this.data = [...this.data, { text }];
    this.requestUpdate();
  }
}
