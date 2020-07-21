import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import {getRenderer} from '../lib/get-renderer';

export const getTemplate = () => {
  const shouldBeRenderedMarkup = '<div>このマークアップはdiv要素としてレンダリングされます</div>';
  const shouldNotBeRenderedMarkup = '<div>このマークアップはテキストとしてレンダリングされます</div>';

  return html`
    <h3>unsafeHTML</h3>
    ${unsafeHTML(shouldBeRenderedMarkup)}
    ${shouldNotBeRenderedMarkup}
  `;
};

const renderer = getRenderer(getTemplate, document.getElementById('app'));
renderer.render();
