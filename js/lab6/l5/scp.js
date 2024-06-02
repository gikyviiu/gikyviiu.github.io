function showPrompt(html, callback) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = 
      <div class="modal-content">
        <p>${html}</p>
        <input type="text" class="prompt-input">
        <div class="button-container">
          <button class="ok-button">OK</button>
          <button class="cancel-button">Отмена</button>
        </div>
      </div>
    ;
    
    document.body.appendChild(modal);
  
    const input = modal.querySelector('.prompt-input');
    input.focus();
  
    input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        const value = input.value;
        closeModal();
        callback(value);
      } else if (event.key === 'Escape') {
        closeModal();
        callback(null);
      }
    });
  
    const okButton = modal.querySelector('.ok-button');
    okButton.addEventListener('click', function() {
      const value = input.value;
      closeModal();
      callback(value);
    });
  
    const cancelButton = modal.querySelector('.cancel-button');
    cancelButton.addEventListener('click', function() {
      closeModal();
      callback(null);
    });
  
    function closeModal() {
      document.body.removeChild(modal);
    }
  }
  
  function processInput(value) {
    if (value) {
      alert(`Привет, ${value}!`);
    } else {
      alert('Вы отменили ввод.');
    }
  }
  