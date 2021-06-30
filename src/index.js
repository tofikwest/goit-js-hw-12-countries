import './sass/main.scss';
import data from './JSON/menu.json';
import item from './templates/menu.hbs';

const ulNode = document.querySelector('ul.js-menu');
console.log(ulNode);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function markupMaker() {
  const tmp = data.map(item).join('');
  ulNode.innerHTML = tmp;
}
markupMaker();

const forBody = document.querySelector('body');

const makeDarkorLight = document.querySelector('#theme-switch-toggle');

makeDarkorLight.addEventListener('change', e => {
  const themeName = e.target.checked ? Theme.DARK : Theme.LIGHT;
  forBody.classList.add(themeName);
  forBody.classList.remove(e.target.checked ? Theme.LIGHT : Theme.DARK);
  localStorage.setItem('Theme', themeName);

  // forBody.classList.toggle(Theme.DARK); // переключатель импута  -рабоатет
  // const current = localStorage.getItem('Theme');
  // console.log(current);

  // if (forBody.classList.contains(Theme.DARK)) {
  //   // если у нас есть Theme Dark на бади то локал сторедж ДАрк
  //   const asd = localStorage.setItem('Theme', Theme.DARK);

  //   const current = localStorage.getItem('Theme');
  //   console.log((forBody.classList = current));

  //   if (localStorage.getItem('Theme') === 'dark-theme') {
  //     // alert('qwe');
  //     forBody.classList = Theme.DARK;
  //   }

  //   // localStorage.getItem(Theme.DARK);
  // } else {
  //   // в противном случае локал сторедж у нас будет лайт и добавляется клас Лайт
  //   localStorage.setItem('Theme', Theme.LIGHT);
  //   // forBody.classList.add(Theme.LIGHT);
  // }
});

function inialTheme() {
  const currTheme = localStorage.getItem('Theme') || Theme.LIGHT;
  forBody.classList.add(currTheme);
  if (currTheme === Theme.DARK) {
    makeDarkorLight.checked = true;
  }
}
inialTheme();
