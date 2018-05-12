import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import KanjiMaster from './KanjiMaster';
import '../css/imports.css';

const display = () => {
  render(
    <BrowserRouter>
      <KanjiMaster />
    </BrowserRouter>,
    document.getElementById('app')
  );
};

display();

if (module.hot) {
  module.hot.accept('./KanjiMaster', () => {
    display();
  });
}
