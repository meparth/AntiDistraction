chrome.runtime.onMessage.addListener(receiver);

window.start_time = "ugabuga";

var TIMELIMIT = 15;

var currtab = "";
/*

var testObject = { 'one': 1, 'two': 2, 'three': 3 };

console.log("---raw object---");
console.log(testObject);

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log("---retrieved object---");
console.log(JSON.parse(retrievedObject));

*/



function receiver(request, sender, sendResponse){
    // console.log("received text --> " + request);
    // console.log("received from --> " + sender.tab.url);
    // window.start_time = request;
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    //     var thistab = getDomain(tabs[0].url);
    //     // setcurrtab(thistab);
    //
    //     console.log("current tab: " + currtab);
    // });

    if(request=="5") {
        window.timeList[currtab] = 1;
    }else if (request=="15") {
        window.timeList[currtab] = 15;
    }else if(request=="30"){
        window.timeList[currtab] = 30;
    }else if(request=="60"){
        window.timeList[currtab] = 60;
    }

    console.log("set "+request+" mins for "+currtab);



}

/// domainList be a dictionary
/// contains the time(sec) spent actively on a domain
window.domainList = {};
window.timeList = {};

var initialize = function(){
    chrome.tabs.query({currentWindow: true}, function(tabs) {

        for(tab of tabs){
            d = getDomain(tab.url).toString();
            console.log("--enlisting " + d + "--");

            window.domainList[d] = 0; //Date.now();
            window.timeList[d] = TIMELIMIT;
        }

        console.log(window.domainList);
        // console.log("just testing: " + window.domainList["hecchuuuuuuuuuu"]);
        // if(typeof window.domainList["hecchuuuuuuuuuu"] == 'undefined'){
        //     console.log("just testing2");
        //
        // }

        ////           store locally(why??)
        // localStorage.setItem('domainList', JSON.stringify(window.domainList));
        // var poi = localStorage.getItem('domainList');
        // console.log(JSON.parse(poi));




        // console.log(tabs[0].url);

        // console.log(activeTabInfo);
        // createP(activeTabInfo);

        // var activeTabId = activeTab.id; // or do whatever you need

    });
}


// chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//     currtab = getDomain(tabs[0].url);
// });


var setcurrtab = function(domain) {
    currtab = domain;
}

var prompt = true;


var routineCheckup = function(){
    // var currtab = "";
    // let currtime = Date.now();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        var thistab = getDomain(tabs[0].url);
        setcurrtab(thistab);
        console.log("current tab: " + currtab);
    });
    console.log("current tab: " + currtab);

    if(typeof window.domainList[currtab] == 'undefined'){
        window.domainList[currtab] = 0;
        window.timeList[currtab] = TIMELIMIT;
    }
    else window.domainList[currtab] = window.domainList[currtab]+1;
    console.log(currtab + "->" + window.domainList[currtab]);
    if(window.domainList[currtab]>window.timeList[currtab]*60 && prompt){
        alert("you've consumed more than you are supposed to!");
        prompt = false;
    }

}


var resetPrompt = function(){
    prompt = true;
}


/// we'll run the routineCheckup each second(the interval should be adjusted later)
window.onload = function () {
    initialize();
    setInterval(routineCheckup, 1000);
    setInterval(resetPrompt, 5*1000);

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
