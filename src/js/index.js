import './common.js'
import './burger.js'
import Burger from './burger'

document.addEventListener('DOMContentLoaded', (e) => {
  const burger = new Burger('.fa-bars', '.menu-parent');
  burger.init();
})

