document.addEventListener('DOMContentLoaded', function() {
    const note = document.getElementById('note');
    const saveButton = document.getElementById('save');
  
    // Carrega uma nota salva previamente, caso exista
    chrome.storage.sync.get('note', function(data) {
      note.value = data.note || '';
    });
  
    // Salva a nota atual
    saveButton.addEventListener('click', function() {
      chrome.storage.sync.set({note: note.value}, function() {
        alert('Anotação salva!');
      });
    });
  });
