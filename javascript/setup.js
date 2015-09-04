if (window.File && window.FileReader && window.Blob) {
	main();
} else {
	alert('File API not supported. Please use a different browser.')
}

function main(){
	var setup = document.getElementById("setup");

	//setup screencount buttons and screensettings
	var screenCountNode = document.createElement("ul");
	var screenSettings = document.getElementById("screenSettings");
	for (var i = 1; i < 10; i++){
		//screen count
		var li = document.createElement("li");
		var button = document.createElement("button");
		screenCountNode.appendChild(li);
		li.appendChild(button);
		button.appendChild(document.createTextNode(i));
		buttonSet(button, i);

		//screensettings
		addScreen(screenSettings,i);
	}
	setup.insertBefore(screenCountNode, screenSettings);

	function addScreen(screenSettings,count){
		var newScreen = document.createElement("div");
		newScreen.setAttribute("class","screen");
		var screenId = "screen" + count;
		newScreen.setAttribute("id",screenId);
		newScreen.style.display="none";

		var relativePosition = relativePositionSetting();
		newScreen.appendChild(relativePosition);

		screenSettings.appendChild(newScreen);
	}

	function relativePositionSetting() {
		var boxAbove = document.createElement("td");
		boxAbove.appendChild(document.createTextNode("Above"));
		var boxBelow = boxAbove.cloneNode(false);
		boxBelow.appendChild(document.createTextNode("Below"));
		var boxLeft = boxAbove.cloneNode(false);
		boxLeft.appendChild(document.createTextNode("Left"));
		var boxRight = boxAbove.cloneNode(false);
		boxRight.appendChild(document.createTextNode("Right"));
		var boxMain = boxAbove.cloneNode(false);
		boxMain.appendChild(document.createTextNode("Main"));
		
		var row = document.createElement("tr");
		var row2 = row.cloneNode(true);
		var row3 = row.cloneNode(true);

		row.appendChild(boxAbove);
		row2.appendChild(boxLeft);
		row2.appendChild(boxMain);
		row2.appendChild(boxRight);
		row3.appendChild(boxBelow);
		
		var table = document.createElement("table");
		table.appendChild(row);
		table.appendChild(row2);
		table.appendChild(row3);
		
		return table;
	}



	function buttonSet(button, num){
		button.addEventListener("click", function(){screenSettingsDisplay(num);});
	}

	function screenSettingsDisplay(count) {
		
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
}