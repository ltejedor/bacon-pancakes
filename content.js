chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case "colors-div":
			//sets all div backgrounds to bacon pancakes
			var divs = document.querySelectorAll("div");
			if(divs.length === 0) {
				alert("Nothing to baconize");
			} else {
				for(var i=0; i<divs.length; i++) {
					var baconImgNum = Math.floor(Math.random() * 5) + 1;
					var bgImg = chrome.extension.getURL('img/bacon-gif-' + baconImgNum + '.gif');
					divs[i].style.backgroundImage = "url(" + bgImg + ")";
				}
			}
		break;
	}
});