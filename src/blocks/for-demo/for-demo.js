document.addEventListener('DOMContentLoaded', function(){
  
  const successBtn = document.querySelector('.status-modal--success');
  const dangerBtn = document.querySelector('.status-modal--danger');
  
  successBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    statusModal.showMessage( 'Ваше сообщение отправлено', true, 'success' )
  })
  
  dangerBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    statusModal.showMessage( 'Ваше сообщение не отправлено', true, 'error' )
  })
});