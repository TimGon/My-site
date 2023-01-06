'use strict';

let button = document.querySelector('.btn'),
    arrowBtn = document.getElementById('arrow'),
    modalWindows = document.querySelector('.modalwindow'),
    body = document.getElementsByTagName('body'),
    closeBtn = document.querySelector('.modalwindow__close');

    // Открытие модального окна

button.onclick = function() {
    modalWindows.style.display = "flex";

}

    // Закрытие модального окна
    
closeBtn.onclick = function() {
    modalWindows.style.display = "none";
}

    // Переходы на следующую секцию

function scrollDown() {
    let windowCoords = document.documentElement.clientHeight;
    
    if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, windowCoords-window.pageYOffset);
        setTimeout(scroll, 0);
    }
    if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
    };
}

    arrowBtn.onclick = scrollDown;

