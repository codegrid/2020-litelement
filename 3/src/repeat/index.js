import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat'

import { getRenderer } from '../lib/get-renderer';
import {insertHeadToTail} from '../lib/insert-head-to-tail';

let items = [
  { text: '肉を買う', id: 1 },
  { text: 'じゃがいも買う', id: 2 },
  { text: 'にんじん買う', id: 3 },
];

const getTemplate = (render) => {
  const onClick = () => {
    items = insertHeadToTail(items)
    render();
  }

  return html`
    <h3>repeat</h3>

    <ul>
      ${repeat(
        items,
        (i) => i.id,
        (i) => html`<li>${i.text}</li>`
      )}
    </ul>

    <h3>not use repeat</h3>

    <ul>
      ${items.map((i) => html`<li>${i.text}</li>`)}
    </ul>

    <hr>

    <button @click=${onClick}>Change data</button>
  `;
};

const renderer = getRenderer(getTemplate, document.getElementById('app'));
renderer.render();
