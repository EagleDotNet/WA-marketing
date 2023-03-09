const replaceText = (node) => {
  const text = node.textContent;
  const regex = /(WhatsApp)/gi;
  if (regex.test(text)) {
    const replacedText = text.replace(regex, 'WhatsApp Marketing');
    node.textContent = replacedText;
  }
};

const walk = (node) => {
  if (node.nodeName === 'SCRIPT' || node.nodeName === 'STYLE') {
    return;
  }
  if (node.nodeType === 3) {
    replaceText(node);
  } else {
    for (let i = 0; i < node.childNodes.length; i++) {
      walk(node.childNodes[i]);
    }
  }
};

walk(document.body);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          walk(node);
        }
      });
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
