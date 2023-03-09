chrome.runtime.onInstalled.addListener(() => {
     chrome.contextMenus.create({
       id: "WA-marketing",
       title: "Share on WhatsApp",
       contexts: ["selection"],
     });
   });
   
   chrome.contextMenus.onClicked.addListener((info, tab) => {
     const url = `whatsapp://send?text=${encodeURIComponent(info.selectionText)}&phone=`;
     chrome.tabs.create({ url, index: tab.index + 1 });
   });
   