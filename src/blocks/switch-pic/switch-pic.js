// (function(){
// код
// }());

 document.addEventListener('DOMContentLoaded', function(){
  const switchPic = document.querySelector('.switch-pic');
  const picSec = document.querySelector('#two');
  const range = document.querySelector('.switch__range');

  class PicSwitcher {
    constructor( options ){
      this.picContainer = options.container;
      this.picSecond = options.second;
      this.range = options.range || null;
      this.type = options.type || 'mouse';
      this.mouseleave = options.mouseleave || false;
      this.start = options.start || '50';
      this.x = 0;

      if(this.range === null){
        this.type = 'mouse';
      }

      this.init();
    }

    init(){
      this.picSecond.style.width = this.start + '%';

      if( this.type === 'mouse' ){
        this.mouseMove();
      }
      if ( this.type === 'range' ){
        this.rangeMove();
      }
      if (this.type ==='both'){
        this.mouseMove();
        this.rangeMove();
      }
    }

    mouseMove(){
      this.picContainer.addEventListener('mousemove', (e) =>{
        this.x = e.offsetX;
        this.picSecond.style.width = this.x + 'px';

        if(this.mouseleave){
          this.picContainer.addEventListener('mouseleave', (e) =>{
            this.picSecond.style.width = this.start;
          })
        }
      })
    }

    rangeMove(){
      this.range.value = this.start;

      this.range.addEventListener('mousemove', (e) =>{
        this.x = this.range.value;
        this.picSecond.style.width = this.x + '%';
      })
    }
  }

  if(switchPic !== null){
    const picSwitcher = new PicSwitcher({
      container: switchPic,
      second: picSec,
      range: range,
      type: 'both',
      start: '0'
    })
  } 
});


