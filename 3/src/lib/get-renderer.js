import { render } from "lit-html";

export const getRenderer = (getTemplate, container) => {
  const _render = () => render(getTemplate(_render), container);
  return {
    render: _render,
  }
}
