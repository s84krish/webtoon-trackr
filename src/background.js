chrome.runtime.onInstalled.addListener(() => {
  console.log('IT WORKS!?')


  //create context menu
  chrome.contextMenus.create({
    id: 'tracker',
    title: 'Add to Trackr',
    contexts: ['link']
  });

  chrome.contextMenus.create({
    id: '1',
    parentId: 'tracker',
    title: 'Monday',
    contexts: ['link']
  });

  chrome.contextMenus.create({
    id: '2',
    parentId: 'tracker',
    title: 'Tuesday',
    contexts: ['link']
  });

  chrome.contextMenus.create({
    id: '3',
    parentId: 'tracker',
    title: 'Wednesday',
    contexts: ['link']
  });

  chrome.contextMenus.create({
    id: '4',
    parentId: 'tracker',
    title: 'Thursday',
    contexts: ['link']
  });

  chrome.contextMenus.create({
    id: '5',
    parentId: 'tracker',
    title: 'Friday',
    contexts: ['link']
  });

  chrome.contextMenus.create({
    id: '6',
    parentId: 'tracker',
    title: 'Saturday',
    contexts: ['link']
  });

  chrome.contextMenus.create({
    id: '0',
    parentId: 'tracker',
    title: 'Sunday',
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
  const webtoon = {link: info.linkUrl, day: info.menuItemId};
  console.log(webtoon);

  chrome.storage.sync.get({list: []}).then((result) => {
    const newList = result.list;
    if (newList && Array.isArray(newList)){
      newList.push(webtoon);
    }
    chrome.storage.sync.set({ list: newList }).then(() => {
      for (let i=0; i < newList.length; i++){
        console.log("List " + i + " " + newList[i].link + " " + newList[i].day);
      }
    });
  });
});

