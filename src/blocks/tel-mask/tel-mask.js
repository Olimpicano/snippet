//window.addEventListener("DOMContentLoaded", function() {
//  function setCursorPosition(pos, elem) {
//      elem.focus();
//      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
//      else if (elem.createTextRange) {
//          var range = elem.createTextRange();
//          range.collapse(true);
//          range.moveEnd("character", pos);
//          range.moveStart("character", pos);
//          range.select()
//      }
//  }
//  function mask(event) {
//      var matrix = "+7 (___) ___ ____",
//          i = 0,
//          def = matrix.replace(/\D/g, ""),
//          val = this.value.replace(/\D/g, "");
//      if (def.length >= val.length) val = def;
//      this.value = matrix.replace(/./g, function(a) {
//          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
//      });
//      if (event.type == "blur") {
//          if (this.value.length == 2) this.value = ""
//      } else setCursorPosition(this.value.length, this)
//  };
//      var input = document.querySelector(".form__phone");
//      input.addEventListener("input", mask, false);
//      input.addEventListener("focus", mask, false);
//      input.addEventListener("blur", mask, false);
//});


window.addEventListener("DOMContentLoaded", function() {
  
  class TelMask {
    constructor( option ){
      this.input = option.input;
      this.placeholder = option.place || false;
      this.matrix = option.mask || '+7 (___) ___ ____';
      
     this.init() 
    }
    
    init(){
      if(this.placeholder){
        this.input.placeholder = this.matrix;
      }
      
      this.input.addEventListener("input", (e) => this.mask(e));
      this.input.addEventListener("focus", (e) => this.mask(e));
      this.input.addEventListener("blur", (e) => this.mask);
    }
    
    setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
      else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
      }
    }
    
    mask(event){
      const def = this.matrix.replace(/\D/g, "");
      let idx = 0;
      let target = event.target;
      let val = target.value.replace(/\D/g, "");
      
      if (def.length >= val.length) val = def;
      
      target.value = this.matrix.replace(/./g, (a) => {
          return /[_\d]/.test(a) && idx < val.length ? val.charAt(idx++) : idx >= val.length ? "" : a
      });
      if (target.type == "blur") {
          if (target.value.length === 2) target.value = ""
          
      } else this.setCursorPosition(target.value.length, target)
    }
}
  
  const phoneMask = document.querySelector(".form__phone");
  
  
  if(phoneMask !== null){
    const mask = new TelMask({
      input : phoneMask
    }) 
  }
});
