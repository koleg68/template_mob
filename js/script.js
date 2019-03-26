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
      } else {
         clearTimeout(timer);
         window.scrollTo(0, 0);
      }
   }

};
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
   animationTime = 300,
   framesCount = 20;

anchors.forEach(function (item) {
   // каждому якорю присваиваем обработчик события
   item.addEventListener('click', function (e) {
      // убираем стандартное поведение
      e.preventDefault();

      // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

      // запускаем интервал, в котором
      let scroller = setInterval(function () {
         // считаем на сколько скроллить за 1 такт
         let scrollBy = coordY / framesCount;

         // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
         // и дно страницы не достигнуто
         if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
            // то скроллим на к-во пикселей, которое соответствует одному такту
            window.scrollBy(0, scrollBy);
         } else {
            // иначе добираемся до элемента и выходим из интервала
            window.scrollTo(0, coordY);
            clearInterval(scroller);
         }
         // время интервала равняется частному от времени анимации и к-ва кадров
      }, animationTime / framesCount);
   });
});

var btn = document.getElementsByTagName('button');
for (var i = 0; i < btn.length; i++) {
   btn[i].onmousedown = function (event) {
      event.target.classList.add('pushed');
   };
   btn[i].onmouseup = function (event) {
      event.target.classList.remove('pushed');
   };
}
var x = document.getElementsByClassName('i');
console.log(x);

for (var j=0; j<x.length; j++) {
  var z = 0; x[j].getElementsByTagName('a');
}
console.log(z);


