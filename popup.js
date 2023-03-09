const sendMessage = () => {
    const message = document.getElementById('message').value;
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('click', sendMessage);
  });
  