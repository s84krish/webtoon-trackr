/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
chrome.runtime.onInstalled.addListener(function () {
  console.log('IT WORKS!?');

  //create context menu
  chrome.contextMenus.create({
    id: 'tracker',
    title: 'Add to Trackr',
    contexts: ['link']
  });
});
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  console.log(info);
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBQSxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDQyxXQUFXLENBQUMsWUFBTTtFQUMzQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDOztFQUV6QjtFQUNBTCxNQUFNLENBQUNNLFlBQVksQ0FBQ0MsTUFBTSxDQUFDO0lBQ3pCQyxFQUFFLEVBQUUsU0FBUztJQUNiQyxLQUFLLEVBQUUsZUFBZTtJQUN0QkMsUUFBUSxFQUFFLENBQUMsTUFBTTtFQUNuQixDQUFDLENBQUM7QUFFSixDQUFDLENBQUM7QUFHRlYsTUFBTSxDQUFDTSxZQUFZLENBQUNLLFNBQVMsQ0FBQ1IsV0FBVyxDQUFDLFVBQVNTLElBQUksRUFBRUMsR0FBRyxFQUFDO0VBQzNEVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sSUFBSSxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VidG9vbi10cmFja3IvLi9zcmMvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0lUIFdPUktTIT8nKVxyXG5cclxuICAvL2NyZWF0ZSBjb250ZXh0IG1lbnVcclxuICBjaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XHJcbiAgICBpZDogJ3RyYWNrZXInLFxyXG4gICAgdGl0bGU6ICdBZGQgdG8gVHJhY2tyJyxcclxuICAgIGNvbnRleHRzOiBbJ2xpbmsnXVxyXG4gIH0pO1xyXG4gIFxyXG59KTtcclxuXHJcblxyXG5jaHJvbWUuY29udGV4dE1lbnVzLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbihpbmZvLCB0YWIpe1xyXG4gIGNvbnNvbGUubG9nKGluZm8pXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiY2hyb21lIiwicnVudGltZSIsIm9uSW5zdGFsbGVkIiwiYWRkTGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiY29udGV4dE1lbnVzIiwiY3JlYXRlIiwiaWQiLCJ0aXRsZSIsImNvbnRleHRzIiwib25DbGlja2VkIiwiaW5mbyIsInRhYiJdLCJzb3VyY2VSb290IjoiIn0=