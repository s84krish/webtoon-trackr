chrome.runtime.onInstalled.addListener(() => {
  console.log('IT WORKS!?')


  //create context menu
  chrome.contextMenus.create({
    id: 'tracker',
    title: 'Add to Trackr',
    contexts: ['link']
  });

  chrome.storage.sync.get(["list"]).then((result) => {
    if (result.list == null){
      const list = new Array();
      chrome.storage.sync.set({list:list}).then(() => {
        console.log("created list");
      });
    }
    console.log(result.list)
  });
  

});

chrome.contextMenus.onClicked.addListener(function(info){
  console.log(info.linkUrl);
  
  chrome.storage.sync.get({list: []}).then((result) => {
    const newList = result.list;
    if (newList && Array.isArray(newList)){
      newList.push(info.linkUrl);
    }
    chrome.storage.sync.set({ list: newList }).then(() => {
      for (let i=0; i < newList.length; i++){
        console.log("List " + i + " " + newList[i]);
      }
    });
  });
});

