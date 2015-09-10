if (window.File && window.FileReader && window.Blob) {
	main();
} else {
	alert('File API not supported. Please use a different browser.')
}

function main(){
	//setup screencount buttons and screensettings
	var screenCountNode = document.getElementById("screenCount");
	var buttonSample = screenCountNode.firstElementChild;
	buttonSet(buttonSample.firstElementChild, 1);
	var screenSettings = document.getElementById("screenSettings");
	var screenSample = document.getElementById("screen1");
	for (var i = 2; i < 10; i++){
		//screen count 
		var buttonNew = buttonSample.cloneNode(true);
		buttonNew.firstElementChild.replaceChild(document.createTextNode(i),buttonNew.firstElementChild.firstChild);
		buttonSet(buttonNew.firstElementChild, i);
		screenCountNode.appendChild(buttonNew);
		//screensettings
		var screenNew = screenSample.cloneNode(true);
		var screenId = "screen"+i;
		screenNew.setAttribute("id",screenId);
		var settingRelative = "relative"+i;
		var relativeInputs = screenNew.getElementsByTagName("table")[0].getElementsByTagName("input");
		for (var j = 0; j < relativeInputs.length; j++){
			relativeInputs[j].setAttribute("name",settingRelative);
		}
		var settingWidth = "width"+i;
		var settingHeight = "height"+i;
		var settingSize = "size"+i;
		var settingDisX = "distanceX"+i;
		var settingDisY = "distanceY"+i;
		var numInputs = screenNew.getElementsByTagName("input");
		numInputs[4].setAttribute("name",settingWidth);
		numInputs[5].setAttribute("name",settingHeight);
		numInputs[6].setAttribute("name",settingSize);
		numInputs[7].setAttribute("name",settingDisX);
		numInputs[8].setAttribute("name",settingDisY);
		screenSettings.appendChild(screenNew);
	}
	//hide
	var hide = screenSample.getElementsByClassName("hidden");
	for (var i = 0; i < hide.length; i++){
		hide[i].style.display="none";
	}
}

function buttonSet(button, num){
	button.addEventListener("click", function(){settingsDisplayHide(num);});
}

function settingsDisplayHide(count) {
	var screenCountOld = screenSettings.getAttribute("data-screencount");
	var screenList = screenSettings.getElementsByClassName("screen");
	//show more
	for (var i = screenCountOld; i < count; i++) {
		screenList[i].style.display="inline";
	}
	//show less
	for (var i = screenCountOld; i > count; i--) {
		screenList[i-1].style.display="none";
	}
	screenSettings.setAttribute("data-screencount", count);
}