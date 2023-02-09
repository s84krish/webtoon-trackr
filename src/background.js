chrome.runtime.onInstalled.addListener(() => {
  console.log('IT WORKS!?')

  //create context menu
  chrome.contextMenus.create({
    id: 'tracker',
    title: 'Add to Trackr',
    contexts: ['link']
  });
  
});


chrome.contextMenus.onClicked.addListener(function(info, tab){
  console.log(info)
});
