window.onload = function() {
	var port = chrome.extension.connect({ name: "pancake-divs-port" });
	document.getElementById("button").onclick = function() {
    	port.postMessage({ type: "pancake-divs"});

	}
}