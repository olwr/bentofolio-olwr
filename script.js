const body = document.querySelector('body'),
    color_switch = document.querySelector('.color-switch');

let getMode = localStorage.getItem('mode');
if(getMode && getMode === 'dark') {
    body.classList.add('dark');

    color_switch.classList.add('active');
}

color_switch.addEventListener('click', () => {
    body.classList.toggle('dark');

    if(!body.classList.contains('dark')) {
        return localStorage.setItem('mode', 'light');
    }
    localStorage.setItem('mode', 'dark');
});


color_switch.addEventListener('click', () => color_switch.classList.toggle('active'));