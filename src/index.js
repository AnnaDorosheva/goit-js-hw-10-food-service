import menu from './menu.json';
import menuItem from './templates/menu-item.hbs';
import './styles.css';
import { brotliDecompressSync } from 'zlib';

const refs = {
  postMenu: document.querySelector('#menu'),
  checkbox: document.querySelector('#theme-switch-control'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.checkbox.addEventListener('change', changeTheme);

buildPostMenu(menu);

function buildPostMenu(menu) {
  const markup = menu.map(item => menuItem(item)).join('');
  refs.postMenu.insertAdjacentHTML('beforeend', markup);
}

// let themeKey = 'theme';
// const themeValue = localStorage.getItem(themeKey);

// if(themeValue === Theme.DARK) {
//     document.body.classList.add(Theme.DARK);
//     refs.checkbox.checked = true;
// };

// function changeTheme(e) {
// if(e.target.checked) {
//     localStorage.setItem(themeKey, Theme.DARK);
//     document.body.classList.remove(Theme.LIGHT);
//     document.body.classList.add(Theme.DARK);
// } else {
//     localStorage.setItem(themeKey, Theme.LIGHT);
//     document.body.classList.remove(Theme.DARK);
//     document.body.classList.add(Theme.LIGHT);
// }
// };

// ----------------------

if(localStorage.getItem('theme') === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    refs.checkbox.checked = true;
};

function changeTheme(e) {
if(e.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
} else {
    localStorage.setItem('theme', Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
}
};
