var clicktElement;
var clicketParent;
var shipsOrdin = ['horizont', 'vertical'];
var playerField = [];
var playerShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
var playerSipOrientation = 0;
var currentShip = 0;
var counter = 0;

function myFunction(e) {

	clicktElement = e.target.id;
    clicketParent = e.target.parentNode.id;

    //alert('counter' + counter);

    if ((counter < 11)) {

	    shipDisplay(playerShips[currentShip], clicktElement, shipsOrdin[playerSipOrientation]);
	    createPlayFields();
	} 
}

function checkForMistakes(cl) {

	var right;
	if(playerSipOrientation == 0) {

		if(currentShip == 0) {

		    if (cl == (10 || 11 || 12 || 22 || 23 || 24 || 34 || 35 || 36 || 46 || 47 || 48 ||
		    			58 || 59 || 60	|| 70 || 71 || 72 || 82 || 83 || 84 ||94 || 95 || 96 ||
		    		106 || 107 || 108 || 118 || 119 || 120 || 130 || 131 || 132)) {

		    	

		    	right = false;

		    	return right;

		    } else {

		    	wrong = true;
		    };
		}

	}
	return right;
}

function createPlayFields() {
	//alert('initial');

	initialPLayerField();
}

//:::::::::::::::::::::::::::::::


	function initialPLayerField(){		

		for (var i = 0; i < 144; i++) {
	
			playerField[i] = 0;
		};

			showPrompt(playerShips[counter]);		
		
	}
	function showPrompt(lenght) {

		if(lenght == 1){

			document.getElementById('playerFieldPrompt').style.display = 'block';
			document.getElementById('0c').style.display = 'none';
			document.getElementById('shipType').style.display = 'none';
			document.getElementById('directionP').innerHTML = 'next hsip is ' + lenght + 'cell';
			document.getElementById('1c').innerHTML = 'OK';
		} else {

		document.getElementById('playerFieldPrompt').style.display = 'block';
		//document.getElementById('cover').style.display = 'block';
		document.getElementById('shipType').innerHTML = 'ship lenght : ' + lenght + ' cells';
		}
	}	
		
	function playerShipOrient(e) {

		var clickElem = e.target.id;

		playerSipOrientation = parseInt(clickElem);

		//alert('curr Ship ' +  currentShip + 'counter ' + counter);

		document.getElementById('playerFieldPrompt').style.display = 'none'; 

		if( counter != 0) {

		currentShip += 1;		
		}
		
		counter += 1;

		return;
	}


//:::::::::::::::::::


function shipDisplay(lenght, startElement, shipOrdin){

	if(shipOrdin === 'horizont') {

		if(lenght == 4) {

			document.getElementById(startElement).style.backgroundImage = "url('images/shipBack.png')";
			document.getElementById(parseInt(startElement)+1).style.backgroundImage = "url('images/shipMiddle.png')";
			document.getElementById(parseInt(startElement)+2).style.backgroundImage = "url('images/shipMiddle.png')";
			document.getElementById(parseInt(startElement)+3).style.backgroundImage = "url('images/shipFront.png')";
		} else if (lenght == 3) {

			document.getElementById(startElement).style.backgroundImage = "url('images/shipBack.png')";
			document.getElementById(parseInt(startElement)+1).style.backgroundImage = "url('images/shipMiddle.png')";			
			document.getElementById(parseInt(startElement)+2).style.backgroundImage = "url('images/shipFront.png')";
		} else if (lenght == 2) {

			document.getElementById(startElement).style.backgroundImage = "url('images/shipBack.png')";			
			document.getElementById(parseInt(startElement)+1).style.backgroundImage = "url('images/shipFront.png')";
		} else if (lenght == 1) {
			
			document.getElementById(parseInt(startElement)).style.backgroundImage = "url('images/shipFront.png')";
		}
	} else if (shipOrdin === 'vertical') {

		if(lenght == 4) {
			document.getElementById(startElement).style.backgroundImage = "url('images/shipBackVert.png')";
			document.getElementById(parseInt(startElement)+12).style.backgroundImage = "url('images/shipMiddleVert.png')";
			document.getElementById(parseInt(startElement)+24).style.backgroundImage = "url('images/shipMiddleVert.png')";
			document.getElementById(parseInt(startElement)+36).style.backgroundImage = "url('images/shipFrontVert.png')";
		} else if (lenght == 3) {

			document.getElementById(startElement).style.backgroundImage = "url('images/shipBackVert.png')";
			document.getElementById(parseInt(startElement)+12).style.backgroundImage = "url('images/shipMiddleVert.png')";			
			document.getElementById(parseInt(startElement)+24).style.backgroundImage = "url('images/shipFrontVert.png')";
		} else if (lenght == 2) {

			document.getElementById(startElement).style.backgroundImage = "url('images/shipBackVert.png')";			
			document.getElementById(parseInt(startElement)+12).style.backgroundImage = "url('images/shipFrontVert.png')";
		} else if (lenght == 1) {
						
			document.getElementById(parseInt(startElement)).style.backgroundImage = "url('images/shipFrontVert.png')";
		}
	}
}

