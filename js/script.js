// JavaScript 29. Плавная прокрутка страницы вверх
window.onload = function () {
   var scrolled;
   var timer;

   document.getElementById('up').onclick = function () {
      scrolled = window.pageYOffset;

      scrollToTop();
   };
   function scrollToTop() {

      if (scrolled > 0) {
         window.scrollTo(0, scrolled);
         scrolled = scrolled - 500; //скорость прокрутки
         timer = setTimeout(scrollToTop, 100);
      }
      else {
         clearTimeout(timer);
         window.scrollTo(0, 0);
      }
   }

   window.onscroll = function () {
      var top = document.getElementById('up');
      if (window.pageYOffset > 100) {
         top.style.display = 'block';
      } else {
         top.style.display = 'none';
      }
   };

 };