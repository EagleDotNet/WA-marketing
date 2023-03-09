const link = document.createElement('a');
link.href = '#';
link.innerText = 'Share on WhatsApp';
link.onclick = () => {
  const selection = window.getSelection().toString();
  const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(selection)}`;
  window.location.href = whatsappUrl;
  return false;
};

const container = document.createElement('div');
container.style.position = 'fixed';
container.style.bottom = '20px';
container.style.right = '20px';
container.style.backgroundColor = '#4FCE5D';
container.style.padding = '10px';
container.style.borderRadius = '5px';
container.appendChild(link);

document.body.appendChild(container);
