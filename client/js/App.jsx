import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import KanjiMaster from './KanjiMaster';
import '../css/imports.css';

const display = () => {
  render(<KanjiMaster />, document.getElementById('app'));
};

display();

if (module.hot) {
  module.hot.accept('./KanjiMaster', () => {
    display();
  });
}
