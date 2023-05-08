// Custom Scripts
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()
;
const langEngButton = document.getElementById('langEng');
const langUkrButton = document.getElementById('langUkr');
const langButtonCont = document.querySelector('.language-cont');

langButtonCont.addEventListener('click', function(event) {

    if (event.target == langUkrButton) {
        
        langUkrButton.classList.add('active-button');
        langEngButton.classList.remove('active-button');
    }

    if (event.target == langEngButton) {
        langEngButton.classList.add('active-button');
        langUkrButton.classList.remove('active-button');
    }

    
});




;
