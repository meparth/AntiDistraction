
let bgpage = chrome.extension.getBackgroundPage();


// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//
//     // since only one tab should be active and in the current window at once
//     // the return variable should only have one entry
//     var activeTabInfo = tabs[0].url;
//     //
//     // console.log(activeTabInfo);
//     // createP(activeTabInfo);
//
//     // var activeTabId = activeTab.id; // or do whatever you need
//
// });


let start_time = bgpage.start_time;

console.log(start_time);

var currtab = "";
var setcurrtab = function(domain) {
    currtab = domain;
}


let timer = function(){
    // time_elapsed_sec = Math.floor((Date.now() - start_time)/1000);

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        var thistab = getDomain(tabs[0].url);
        setcurrtab(thistab);
    })

    time_elapsed_sec = bgpage.domainList[currtab];
    time_elapsed_min = Math.floor(time_elapsed_sec/60);
    time_elapsed_sec = time_elapsed_sec%60;

    time_elapsed = "";
    if(time_elapsed_min>0) time_elapsed += time_elapsed_min + " min ";
    time_elapsed += time_elapsed_sec + " sec";



    let p_time_elapsed = document.getElementById("time_elapsed");
    p_time_elapsed.innerHTML = time_elapsed;

}

window.onload = function () {
    setInterval(timer, 1000);

    // document.querySelector('.timebutton').addEventListener('click', setbuttons);
    document.querySelector('#fivemin').addEventListener('click', setfive);
    document.querySelector('#fifteenmin').addEventListener('click', setfifteen);
    document.querySelector('#thirtymin').addEventListener('click', setthirty);
    document.querySelector('#hour').addEventListener('click', sethour);

}

let setbuttons = function() {
    let buttons = document.getElementsByClassName("timebutton");
    for(b of buttons){
        b.className = "timebutton";
    }
}

let setfive = function(){
    console.log("----setfive----");
    chrome.runtime.sendMessage("5");
    let buttons = document.getElementsByClassName("timebutton");
    for(b of buttons){
        b.className = "timebutton";
    }
    document.getElementById("fivemin").classList.add('active')
}
let setfifteen = function(){
    chrome.runtime.sendMessage("15");
    let buttons = document.getElementsByClassName("timebutton");
    for(b of buttons){
        b.className = "timebutton";
    }
    document.getElementById("fifteenmin").classList.add('active')

}
let setthirty = function(){
    chrome.runtime.sendMessage("30");
    let buttons = document.getElementsByClassName("timebutton");
    for(b of buttons){
        b.className = "timebutton";
    }
    document.getElementById("thirtymin").classList.add('active')

}
let sethour = function(){
    chrome.runtime.sendMessage("60");
    let buttons = document.getElementsByClassName("timebutton");
    for(b of buttons){
        b.className = "timebutton";
    }
    document.getElementById("hour").classList.add('active')

}






let getDomain = function(url){
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}








// var p = createP(Math.floor((Date.now() - start_time)/1000) + " seconds");
// p.id("glich");



/*function setup(){
    noCanvas();

    let bgpage = chrome.extension.getBackgroundPage();
    // let word = bgpage.word;
    //
    // // let url = 'https://api.wordnik.com/v4/word.json/'
    // // url += word + '/definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    //
    // let url = 'https://api.datamuse.com/words?ml=' + word;
    // loadJSON(url, gotData);
    //
    // function gotData(data){
    //     createP(data[0].word);
    // }

    // chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    //
    //
    // });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        var activeTabInfo = tabs[0].url;

        console.log(activeTabInfo);
        createP(activeTabInfo);

        // var activeTabId = activeTab.id; // or do whatever you need

    });

    // localStorage["hiccup"] = "gling";

    //
    // var x=localStorage["start_time"];
    // chrome.storage.local.get(["start_time"], function(result) {
    //     x = result.value;
    //     console.log('Value currently is ' + x);
    // });

    // var p = createP(localStorage["hiccup"]);

    let start_time = bgpage.start_time;

    console.log(start_time);

    var p = createP(Math.floor((Date.now() - start_time)/1000) + " seconds");
    p.id("glich");


    // var secondary = createP(ding);

}

*/



















/*
tab info -->

active: true
audible: false
autoDiscardable: false
discarded: false
favIconUrl: "https://github.githubassets.com/favicon.ico"
height: 637
highlighted: false
id: 894030065
incognito: false
index: 9
mutedInfo: {muted: false}
openerTabId: 894030020
pinned: false
selected: true
status: "complete"
title: "webtimer/background.js at master · dskang/webtimer · GitHub"
url: "https://github.com/dskang/webtimer/blob/master/background.js"
width: 891
windowId: 894029939


*/
