var form = document.getElementById("userInput");
form.addEventListener("submit", function(event) {
	event.preventDefault();
	var settings = document.getElementById("screenSettings");

	//read file
	
	//calculations
	var screenCount = Number(settings.getAttribute("data-screencount"))
	var PPI;
	for (var screenNum=1; screenNum<=screenCount;screenNum++){
		var currentScreen = document.getElementById(("screen"+screenNum));
		
		//relative position
		if (screenNum != 1){ //run if not the main (first) screen
			var relativePosition = getRelativeInput(screenNum);
			if (!relativePosition){
				//throw error
				console.log("no relative position for screen: "+screenNum);
			}
		} else { //main screen; get PPI
			PPI = getPPI(currentScreen);
		}

		//console.log(form.elements[i].value);
	}
	
	console.log(PPI);
	//
});

function getRelativeInput(screenNum){
	var relative = document.getElementsByName("relative"+screenNum);
	var relativeSelected;
	for (var i=0; i<4;i++){
		if (relative[i].checked){
			relativeSelected = relative[i].value;
			break;
		}
	}
	return relativeSelected;
}

function getPPI(theScreen){
	var inputs = theScreen.getElementsByTagName("input");
	var widthPx = inputs[4].value;
	return widthPx/getWidth(theScreen);
}

function getWidth(theScreen){
	var inputs = theScreen.getElementsByTagName("input");
	var widthPx = inputs[4].value;
	var heightPx = inputs[5].value;
	var diag = inputs[6].value;
	return (Math.cos(Math.atan(heightPx/widthPx))*diag);
}