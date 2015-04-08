'use strict';

import 'babel/polyfill';

import App from './App';

function run() {
  new App(document.body).start();
}

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}

