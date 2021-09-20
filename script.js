"use strict"

const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
const menu = document.querySelector('.menu')
const burger = document.querySelector('.burger')
const body = document.querySelector('.body')

burger.addEventListener("click", function(e) {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock')
})

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick) 
  })

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
      
      if(menu.classList.contains('active')) {
        document.body.classList.remove('lock');
        menu.classList.remove('active')
        burger.classList.remove('active')
      }
      
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

console.log(
  '[x] верстка валидная (10/10) \n',
  '[x] верстка семантическая (18/20)\n',
  '[x] для оформления СV используются css-стили (10/10)\n',
  '[x] контент размещается в блоке, который горизонтально центрируется на странице (10/10)\n',
  '[x] вёрстка адаптивная (10/10)\n',
  '[x] есть адаптивное бургер-меню (10/10)\n',
  '[x] на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) (10/10)\n',
  '[x] контакты для связи и перечень навыков оформлены в виде списка ul > li (10/10)\n',
  '[x] CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского (10/10)\n',
  '[x] CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода.(10/10)\n',
  '[-] CV содержит изображения-ссылки на выполненные вами проекты. (0/10)\n',
  '[x] CV выполнено на английском языке (10/10)\n',
  '[x] выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (10/10)\n',
  '[-] есть видеорезюме автора CV на английском языке. (0/10)\n',
  '[+-] дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (6/10)\n'
)