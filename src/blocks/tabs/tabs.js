// document.addEventListener('DOMContentLoaded', function(){});
(function(){
  
//принимает объект со свойством tabs : елемент
window.Tab = function ( option ) {
  this.link = option.tabs.querySelectorAll(".tabs__control-link");
  this.item = option.tabs.querySelectorAll(".tabs__item");
  this.option = option;
  this.click();
}

Tab.prototype.click = function() {
  const link = this.link,
        item = this.item;

  for ( let i = 0, len = link.length; i < len; i++ ) {
    link[i].addEventListener( "click" , function( e ) {
      e.preventDefault();
      
      const eventTarget = e.target;

      for ( let j = 0, len = link.length; j < len; j++ ) {
        if ( link[j] === eventTarget ) {
          if ( eventTarget.classList.contains("active")) {
          } else {
            eventTarget.classList.add("active");
            item[j].classList.add("active");
          }
        } else {
          link[j].classList.remove("active");
          item[j].classList.remove("active");
        }
      }
    });
  }
}
   
}());

const tabsContent = document.querySelector(".tabs");

if(tabsContent !== null){
 let tabs = new Tab({
  tabs : tabsContent
}); 
}

