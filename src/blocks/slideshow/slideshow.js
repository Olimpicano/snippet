// document.addEventListener('DOMContentLoaded', function(){});
 (function(){
   
// параметры
// slideshow : document.querySelector("element")
// duration : number - задержка между появлением и скрытием изображения в display
window.SlideShow = function ( options ) {
  this.items = options.slideshow.querySelectorAll(".slideshow__item");
  this.display = options.slideshow.querySelector(".slideshow__display > img");
  this.duration = options.duration;
  
  this.initFirstItem();
  this.initItems();
};

// инициализация слайдов
SlideShow.prototype.initItems = function () {
  const _this = this;
  
  for ( let i = 0, len = this.items.length; i < len; i++) {
    this.items[i].addEventListener( "click", function ( e ) {
      e.preventDefault();
      const target = e.currentTarget;  
      
      _this.removeAnimation( target );
      _this.checkActiveClass( target );
      _this.addSrc( target );
    });
  }
};

// первый слайд по умолчанию
SlideShow.prototype.initFirstItem = function (  ) {
  const firsItem = this.items[0],
        firstItemImg = firsItem.querySelector("img"),
        itemSrc = firstItemImg.getAttribute("src");
  
  firsItem.classList.add("active");
  this.display.classList.add("animate");
  this.display.setAttribute("src", itemSrc);
}

// если у выбранного слайда нет класса active удаляем у display анимацию(эффект удаления картинки в блоке display)
SlideShow.prototype.removeAnimation = function ( target ) {
  const display = this.display;
  
  if ( target.classList.contains("active")) {
    
  } else {
    display.classList.remove("animate");
  }
};

// эффект появления картинки в блоке display
SlideShow.prototype.addAnimation = function ( target ) {
  const display = this.display;
  
  setTimeout( function () {
    display.classList.add("animate");
  }, this.duration );
};

// если у выбранного слайда нет класса active устанавливаем, удаляем класс active у остальных слайдов, если класс active уже установлен пропускаем установку класса (защита от двойного нажатия)
SlideShow.prototype.checkActiveClass = function ( target ) {
  const _this = this,
        element = target;
  
  for ( let i = 0, len = _this.items.length; i < len; i++) {
    if ( _this.items[i] == element ) {
      if ( element.classList.contains("active") ) {
      } else {
        element.classList.add("active");
        
        _this.addAnimation( element );
      }
    } else {
      _this.items[i].classList.remove("active");
    }
  }
};

// перенаправляем атрибут src у выбранного слайда и передаем в display
SlideShow.prototype.addSrc = function ( target ) {
  const targetImage = target.querySelector(".slideshow__image"),
        tagetImageSrc = targetImage.getAttribute("src");
  
  this.display.setAttribute("src", tagetImageSrc);
}

 }());

const slideShowEl = document.querySelector(".slideshow");

if( slideShowEl !== null ){
  let slideShow = new SlideShow ({
    slideshow : document.querySelector(".slideshow"),
    duration : 100
  });
}