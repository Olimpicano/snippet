// document.addEventListener('DOMContentLoaded', function(){});
 (function(){
   
window.Accordion = function ( options ) {
  this.accordion = options.accordion;
  this.link = options.accordion.querySelectorAll(".accordion__trigger");
  
  this.clickLink( this.link );
}
   
  Accordion.prototype.clickLink = function ( link ) {
    const _this = this;
    
    for ( let i = 0, len = link.length; i < len; i++) {
      link[i].addEventListener("click", function ( e ) {
        e.preventDefault();
        
        _this.activeCheck( e.target );
      });
    }
  }
  
  Accordion.prototype.activeCheck = function ( target ) {
    const link = this.link,
          eventTarget = target;
    
    for ( let i = 0, len = link.length; i < len; i++) {
      let innerBlock = link[i].parentElement.querySelector(".accordion__inner");
       
      if (link[i] === eventTarget) {
        if ( eventTarget.classList.contains("active")) {  
        } else {
          eventTarget.classList.add("active");
          innerBlock.classList.add("accordion__inner--active");
        }
      } else {
        link[i].classList.remove("active");
        innerBlock.classList.remove("accordion__inner--active");
          
      }
    }
  }

 }());

const accordionEl = document.querySelector(".accordion")

if ( accordionEl !== null ){
  const accordion = new Accordion ({
    accordion : document.querySelector(".accordion")
  }); 
}





