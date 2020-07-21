import {html} from 'lit-html';
import {classMap} from 'lit-html/directives/class-map';

import { getRenderer } from '../lib/get-renderer';

const data = {
  favorite: false,
};

const isFavorite = () => {
  return data.favorite;
}

let isPressed = false;

export const getTemplate = (render) => {
  const classObj = {
    'FavoriteButton': true,
    '-isFavorite': isFavorite(),
    '-isPressed': isPressed,
  };

  const onClick = () => {
    data.favorite = !data.favorite;
    render();
  };

  const onMouseDown = () => {
    isPressed = true;
    render();
  };

  const onMouseUp = () => {
    isPressed = false;
    render();
  }

  return html`
    <h3>classMap</h3>

    <button
      class=${classMap(classObj)}
      @click=${onClick}
      @mouseup=${onMouseUp}
      @mousedown=${onMouseDown}
    >Toggle favorite</button>

    <h3>not use classMap</h3>

    <button
      class="FavoriteButton${isFavorite() ? ' -isFavorite' : ''}${isPressed ? ' -isPressed' : ''}"
      @click=${onClick}
      @mouseup=${onMouseUp}
      @mousedown=${onMouseDown}
    >Toggle favorite</button>

    <style>
      .FavoriteButton {
        border: 1px solid #ccc;
        -webkit-appearance: none;
        padding: 5px;
        background-color: #eee;
      }
      .FavoriteButton.-isPressed {
        background-color: #888;
      }
      .FavoriteButton.-isFavorite {
        background-color: #ffb50e;
        border-color: #b17b00;
      }
      .FavoriteButton.-isFavorite.-isPressed {
        background-color: #ca7103;
      }
    </style>
  `;
};

const renderer = getRenderer(getTemplate, document.getElementById('app'));
renderer.render();
