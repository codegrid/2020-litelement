import { html } from 'lit-html';
import { guard } from 'lit-html/directives/guard'

import { insertHeadToTail } from '../lib/insert-head-to-tail';
import { getRenderer } from '../lib/get-renderer';

let items = [
  { text: '肉を買う', id: 1 },
  { text: 'じゃがいも買う', id: 2 },
  { text: 'にんじん買う', id: 3 },
];

let irrelevantItems = ['a', 'b', 'c'];

export const getTemplate = (render) => {
  const onClickChangeIrrelevantItems = () => {
    irrelevantItems = insertHeadToTail(irrelevantItems);
    render();
  }

  const onClickChangeItems = () => {
    items = insertHeadToTail(items)
    render();
  }

  const guarding = () => {
    console.log('guard')
    return items.map(item => {
      return html`${item.text}`;
    });
  };

  const notGuarding = () => {
    console.log('not guard')
    return items.map(item => {
      return html`${item.text}`;
    });
  }

  return html`
    <h3>guard</h3>
    <div>
      ${guard(
        [items],
        () => guarding(),
      )}
    </div>

    <h3>not use guard</h3>
    <div>
      ${notGuarding()}
    </div>

    <!--
    <h3>one-time</h3>

    <div>
      ${guard([], () => {
        console.log('one time')
        return html`This item will never change.`;
      })}
    </div>
    -->

    <hr>

    <button @click=${onClickChangeItems}>Change items</button>
    <button @click=${onClickChangeIrrelevantItems}>Change irrelevant items</button>
  `;
};

const renderer = getRenderer(getTemplate, document.getElementById('app'));
renderer.render();
