window.onload = function() {
	document.getElementById("button").onclick = function() {
		chrome.extension.sendMessage({
	        type: "pancake-divs"
	    });
		chrome.extension.sendMessage({action: "play"})
	}
}