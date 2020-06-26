import { html, render } from 'lit-html';

const updateList = (data, text) => {
  _render(data.concat({text}));
};

const getListItem = (item) => {
  return html`<li>${item.text}</li>`;
}

const getTemplate = (data) => {
  const onSubmit = (event) => {
    event.preventDefault();
    const input = event.target.text;

    updateList(data, input.value);
    input.value = '';
  };

  return html`
    <form @submit=${onSubmit}>
      <input name="text" type="text">
      <button type="submit">Add</button>
    </form>
    <ul>
      ${data.map(item => getListItem(item))}
    </ul>
  `;
};

const _render = (data) => {
  render(getTemplate(data), document.body);
}

_render([]);
