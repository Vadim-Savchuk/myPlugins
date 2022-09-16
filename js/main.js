// Меню_________________________________________________+

let menuActive = document.querySelector('.burger-menu');

menuActive.addEventListener('click', function () {

    menuActive.classList.toggle('menu-active')

    if (menuActive.classList.contains('menu-active')) {
        document.body.classList.add('_lock');
    } else {
        document.body.classList.remove('_lock');
    }
});



// Акардіон_____________________________________________+

let acarderonHeader = document.querySelectorAll('.acardion-header');

acarderonHeader.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.toggle('acardion-active');
        this.nextElementSibling.classList.toggle('acardion-active')
    });
});



// Таби___________________________________________________+

const tabButton = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabButton.forEach(function(item){
    item.addEventListener('click', function(){
    
        // Робимо активну кнопку
        tabButton.forEach(function(item){
            item.classList.remove('active');
        });
        
        item.classList.add('active');

        // Робимо активний контент
        contentBoxes.forEach(function(item){
            item.classList.add('show');
        });

        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('show');

    });
});