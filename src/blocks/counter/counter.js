// document.addEventListener('DOMContentLoaded', function(){});
 (function(){

//CЧЕТЧИК
// конструктор счетчика принимает объект:
//tabs - елемент
//flag - флаг ограничения количества вводимых цифр счеткича через стрелки, если не установлен то false
//limit - лимит количества вводимых цифр, если нет то 0

//инициализирует функции счетчика

window.FormCount = function ( options ) {
  this.input = options.count.querySelector(".counter__input");
  this.btnUp = options.count.querySelector(".counter__up");
  this.btnDown = options.count.querySelector(".counter__down");
  this.flag = options.flag || false;
  this.limit = options.limit || 0;
  
  this.initCount();
  this.clickUp();
  this.clickDown();
  this.keyCheck();
};

// выставляет начальное значение инпута в 0
FormCount.prototype.initCount = function () {
  return this.input.value = 0;
};

// клик по стрелке плюса, вызывает функцию проверки ограничений checkUp, передает объект события в переменной item
FormCount.prototype.clickUp = function () {
  let _this = this;
  this.btnUp.addEventListener( "click" , function ( e ){
    e.preventDefault();
    let item = e.target;
    _this.checkUp( item );
  });
};

// клик по стрелке минуса, вызывает функцию проверки ограничений checkDown, передает объект события в переменной item
FormCount.prototype.clickDown = function () {
  let _this = this;
  this.btnDown.addEventListener( "click" , function ( e ){
    e.preventDefault();
    let item = e.target;
    _this.checkDown( item );
  });
};

// событие ввода символов в инпут, создает массив keyAccess с разрешенными символами, через условие проверят если символ не состоит в массиве, то запрещает ввод
// символы в keyAccess:
// [ 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58] - numbers
// [ 96, 97, 98, 99, 100, 101, 102, 103, 104, 105] - num lock
// [ 37, 38, 39, 40] - arrows
// [ 8 ] - backspace, [ 46 ] - delete
// [ 9 ] - tab
// [ 116 ] - f5

FormCount.prototype.keyCheck = function () {
  
  this.input.addEventListener( "keydown" , function( e ) {
    const keyAccess = [ 8, 9, 37, 38, 39, 40, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 116 ];
    
    if (!keyAccess.includes( e.keyCode )) {
      e.preventDefault();
    }
  });
};

// проверка нажатия на плюс, принимает объект события кнопки плюс, если стоит флаг проверяет предел, если предел достигнут устанавливает максимальное значение
FormCount.prototype.checkUp = function ( item ) {
  if ( this.flag ) {
    if ( this.input.value < this.limit ) {
      return this.input.value++;
    }
    return this.input.value === this.limit;
  }
  return this.input.value++;
};

// проверка нажатия на минус, принимает объект события кнопки минус, проверяет значение, если значение меньше 0, то устанавливает 0
FormCount.prototype.checkDown = function ( item ) {
  if ( this.input.value <= 0 ) {
    return this.input.value = 0;
  }
  return this.input.value--;
};
   
//единичная кнопка счетчика, отвечает за один счеткич, принимает саму кнопку, счетчик, из счетчика берет инпут, флаг ограничения вводимых цифр, предел вводимых цифр, вызывает событие на кнопке

window.CountBtn = function ( options ) {
  this.button = options.button;
  this.count = options.count;
  this.input = options.count.input;
  this.limit = options.count.limit;
  this.flag = options.count.flag;
  
  this.submit();
};

// событие кнопки, проверает флаг, если установлен сравнивает значение в инпуте с пределом
CountBtn.prototype.submit = function () {
  const _this = this;

  this.button.addEventListener( "click" , function( e ){
    e.preventDefault();
  
    if ( _this.flag ) {
      if ( _this.input.value <= _this.limit ) {
        console.log("submit");
      } else {
        console.log("limit");
      }  
    } else {
      console.log("submit");
    }
  });
};
   
//общая кнопка на несколько счетчиков, принимает саму кнопку, массив счетчиков, вызывает событие на кнопке
window.CountBothBtn = function ( options ) {
  this.options = options;
  this.button = options.button;
  
  this.submit();
  
}
// событие на кнопке, проверяет флаги на каждом счетчике, если установлен, проверят предел количества вводимых цифр
CountBothBtn.prototype.submit = function () {
  const _this = this,
        counts = _this.options.counts;
  
  this.button.addEventListener( "click" , function() {
    for ( let i = 0, len = counts.length; i < len; i++ ){
      const flag = counts[i].flag;
      if ( flag ) {
      let limit = counts[i].limit,
            value = counts[i].input.value;
        
        if ( value <= limit ) {
          console.log("submit");
        }
        
        if ( value > limit ) {
          console.log("предел");
        }
      } else {
        console.log("sub no flag");
      }
    }
  });
};

 }());

const countInput1 = document.querySelector( "#form1" )
const countInput2 = document.querySelector( "#form2" )
const countSubmit = document.querySelector(".counter__submit");

if ( countInput1 !== null ){
  const count = new FormCount ({
    count : countInput1,
    flag : true,
    limit : 5
  });
}

if( countInput2 !== null ){
  const count2 = new FormCount ({
    count : countInput2,
    flag : true,
    limit : 10
  });
}

if( countSubmit !== null ){
  const countBtn = new CountBtn ({
    button : countSubmit,
    count : countInput1
  });
}
