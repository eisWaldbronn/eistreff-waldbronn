const NAV_HIDDEN_CLASS = 'nav--mobile-hidden';
const NAV_MAIN = document.querySelector<HTMLElement>('header .nav__main');

document.querySelector('.nav__mobile').addEventListener('click', ev => {
    NAV_MAIN.classList.toggle(NAV_HIDDEN_CLASS);
    ev.preventDefault();
    ev.stopPropagation();
});

window.addEventListener('click', () => {
    if (!NAV_MAIN.classList.contains(NAV_HIDDEN_CLASS)) {
        NAV_MAIN.classList.add(NAV_HIDDEN_CLASS)
    }
});
