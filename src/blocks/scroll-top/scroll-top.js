// document.addEventListener('DOMContentLoaded', function(){});
// (function(){
// код
// }());

class ScrollTop {
  constructor( options ){
    this.button = options.element;
    this.offset = options.offset || 70;
    this.timeOut = options.timeOut || 20;
    this.visibleBtn = options.visible || 500;
    this.timer;
    this.scrolled;
    this.startVisible;
    
    this.initBtn(this.button);
    this.activeBtn(this.button);
  }
  
  initBtn(button){
    button.classList.add('none-visible');
    
    this.isVisible(button);
  }
  
  activeBtn(button){
    
    button.addEventListener('click', (e)=>{
      this.scrolled = window.pageYOffset;
      this.scrollToTop()
    })
  }
  
  isVisible(button){
    let scrollTo = window.pageYOffset;
    
    if( this.visibleBtn <= scrollTo){
      this.button.classList.remove('none-visible');
      this.button.classList.add('is-visible');
    } else {
      this.button.classList.remove('is-visible');
      this.button.classList.add('none-visible');
    }
    this.startVisible = window.setTimeout( () => this.isVisible(), 1500 )
  }

  scrollToTop() {
    
    if( this.scrolled > 0 ){
      window.scrollTo( 0, this.scrolled );
      this.scrolled = this.scrolled - this.offset;
      this.timer = window.setTimeout( () => this.scrollToTop(), this.timeOut );
    } else {
      window.clearTimeout( this.timer );
      window.scrollTo( 0, 0 )
    }
  }
}

const scrollBtn = document.querySelector('#scroll-top');

if (scrollBtn !== null){
  const scrollTop = new ScrollTop({
  element: scrollBtn
  });
}


