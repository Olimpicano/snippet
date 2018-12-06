// document.addEventListener('DOMContentLoaded', function(){});
// (function(){
// код
// }());
let statusModal = (function () {

  function showMessage(msg, flag ,status) {
    _showMessage(msg, flag ,status);
  }

  const 
    _modalHolder = document.querySelector('.status-modal__holder'),
    _modal = document.querySelector('.status-modal'),
    _modalText = document.querySelector('.status-modal__text'),
    _modalClose = document.querySelector('#modal-close');
  
  const success = document.querySelector('.check_mark');
  const error = document.querySelector('.f-modal-alert');
  let messageFlag = false;
  let messageStatus = null;

    _modalClose.addEventListener("click", _hideMessage);

  // показываем сообщение
  function _showMessage (msg, flag ,status) {
    _modalText.textContent = msg;
    _modalHolder.classList.add('status-modal__holder--open');
    _modal.classList.add('status-modal--open');
    
    //проверяем нужна ли иконка, если да то устанавливаем по атрибуту status
    if(flag){
      messageFlag = flag;
      
      if(status === 'success'){
        messageStatus = status;
        
        if(success.length != 0){
          success.classList.remove('hide');
        }
      }
      
      if(status === 'error'){
        messageStatus = status;
        
        if(error.length != 0){
          error.classList.remove('hide');
        }
      }
    }
  }

  // прячем сообщение
  function _hideMessage(e) {
    e.preventDefault();
    _modalHolder.classList.remove('status-modal__holder--open');
    _modal.classList.remove('status-modal--open');
    
    
    //скрываем иконки
    if(messageFlag){
      
      if(messageStatus === 'success'){
        if(success.length != 0){
          success.classList.add('hide');
        }
      }
      
      if(messageStatus === 'error'){
        if(error.length != 0){
          error.classList.add('hide');
        }
      }
    }

  };


  return {
    showMessage: showMessage
  };

})();