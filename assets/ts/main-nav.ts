// const NAV_HIDDEN_CLASS = 'nav--mobile-hidden';
// const NAV_MAIN = document.querySelector<HTMLElement>('header .nav__main');

// document.querySelector('.nav__mobile').addEventListener('click', ev => {
//     NAV_MAIN.classList.toggle(NAV_HIDDEN_CLASS);
//     ev.preventDefault();
//     ev.stopPropagation();
// });

// window.addEventListener('click', () => {
//     if (!NAV_MAIN.classList.contains(NAV_HIDDEN_CLASS)) {
//         NAV_MAIN.classList.add(NAV_HIDDEN_CLASS);
//     }
// });

const BODY = document.querySelector<HTMLElement>('body');
const NAV_MOBILE = document.querySelector<HTMLElement>('.hmenu__mobile');
const NAV_BURGER = document.querySelector<HTMLElement>('.hmenu__burger');
const NAV = document.querySelector<HTMLElement>('.hmenu');

NAV_MOBILE.addEventListener('click', () => {
    NAV.classList.toggle('hmenu--open');
    BODY.classList.toggle('hmenu--body-open');
    NAV_BURGER.classList.toggle('hmenu--burger-open');
});
