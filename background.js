// omnibox
chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
	suggest([
	  {content: "pancake-divs", description: "Make some bacon pancakes!"}
	]);
});
chrome.omnibox.onInputEntered.addListener(function(text) {
	if(text == "pancake-divs") pancakeDivs();
});

// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "pancake-divs":
            pancakeDivs();
        break;
    }
    return true;
});

// listening for an event / long-lived connections
// coming from devtools
chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (message) {
       	switch(port.name) {
			case "pancake-divs-port":
				pancakeDivs();
			break;
		}
    });
});

// send a message to the content script
var pancakeDivs = function() {
	chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.sendMessage(tab.id, {type: "colors-div"});
    // setting a badge
		chrome.browserAction.setBadgeText({text: "Making bacon pancakes!"});
	});
}


//play bacon pancakes audio
var audioElement = document.createElement('audio');
 audioElement.setAttribute("preload", "auto");
 audioElement.autobuffer = true;

 var source1 = document.createElement('source');
 source1.type= 'audio/mp3';
 source1.src= 'mp3/bacon-pancakes.mp3';
 audioElement.appendChild(source1);

 chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == "play"){
          audioElement.load;
          audioElement.play();
      }
});
