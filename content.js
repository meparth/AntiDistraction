console.log("content started");

curr_time = Date.now();

// chrome.runtime.sendMessage(curr_time);
console.log("--sent "+curr_time+"--");


// chrome.tabs.getCurrent(function(tabs){
//     for(tab of tabs){
//         console.log(tab.url);
//     }
// });

// let curr_tab = "";
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//
//     // since only one tab should be active and in the current window at once
//     // the return variable should only have one entry
//     for(tab of tabs){
//         console.log(tab.url);
//     }
//
//     // console.log(activeTabInfo);
//     // createP(activeTabInfo);
//
//     // var activeTabId = activeTab.id; // or do whatever you need
//
// });



// localStorage["start_time"] = curr_time;
// console.log(localStorage["start_time"]);


// window.addEventListener('mouseup', wordSelected);
//
// function wordSelected(){
//     let selText = window.getSelection().toString().trim();
//     console.log(selText);
//
//     if(selText.length > 0){
//         let message = {
//             txt:selText
//         };
//         chrome.runtime.sendMessage(message);
//     }
// }
