const redirectLink = () => {
    const redirectUrl = 'https://wa.me/1234567890';
    window.location.href = redirectUrl;
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    redirectLink();
  });
  