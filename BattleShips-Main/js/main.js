var clicktElement;
var clicketParent;
var shipsOrdin = ['horizont', 'vertical'];
var playerField = [];
var playerShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
var playerShipOrientation = 0;
var currentShip = 0;
var counter = 0;
var player1score = 12;
var player2score = 0;

function myFunction(e) {

	clicktElement = e.target.id;
    clicketParent = e.target.parentNode.id;

    //alert('counter' + counter);

    if ((counter < 11)) {

	    shipDisplay(playerShips[currentShip], clicktElement, shipsOrdin[playerShipOrientation]);
	    createPlayFields();
	}
}

function checkForMistakes(cl) {

	var right;
	if(playerShipOrientation == 0) {
    //ne shvanah mnogo kak vzimash value-to na playerShipOrientation,
    // ama she pravq proverkite pri horizontalno polagane

		if(currentShip == 0) {

            if (cl == (10 || 11 || 12 || 22 || 23 || 24 || 34 || 35 || 36 || 46 || 47 || 48 ||
                58 || 59 || 60 || 70 || 71 || 72 || 82 || 83 || 84 || 94 || 95 || 96 ||
                106 || 107 || 108 || 118 || 119 || 120 || 130 || 131 || 132)) {


                right = false;

                return right;
                //tuk ne trqbva li prosto da izvikame playerShipOrient(e) i prosto currentShip-=1,
                // taka da se vyrnem otnovo na postavqneto na syshtiq korab
            }

            else {

                right = true;
            }
        }

         else if(currentShip == 1 || currentShip == 2) {

             if (cl == (11 || 23 || 35 || 47 || 59 || 71 || 95 || 107 || 119 || 131 || 143 || 10 ||
             22 || 34 || 46	|| 58 || 70 || 94 || 106 || 118 || 130 || 142)) {

             right = false;
             return right;
             }
             else {
             right = true;
             }

         }
         else if(currentShip == 3 || currentShip == 4 || currentShip == 5) {

         if (cl == (11 || 23 || 35 || 47 || 59 || 71 || 95 || 107 || 119 || 131 || 143)) {

             right = false;
             return right;
             }
             else {
             right = true;
             }

         }
         else if(currentShip == 6 || currentShip == 7 || currentShip == 8 || currentShip == 9) {
            right = true;
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
	function showPrompt(length) {

		if(length == 1){

			document.getElementById('playerFieldPrompt').style.display = 'block';
			document.getElementById('0c').style.display = 'none';
			document.getElementById('shipType').style.display = 'none';
			document.getElementById('directionP').innerHTML = 'next ship is ' + length + 'cell';
			document.getElementById('1c').innerHTML = 'OK';
		} else {

		document.getElementById('playerFieldPrompt').style.display = 'block';
		//document.getElementById('cover').style.display = 'block';
		document.getElementById('shipType').innerHTML = 'ship length : ' + length + ' cells';
		}
	}	
		
	function playerShipOrient(e) {

		var clickElem = e.target.id;

		playerShipOrientation = parseInt(clickElem);

		//alert('curr Ship ' +  currentShip + 'counter ' + counter);

		document.getElementById('playerFieldPrompt').style.display = 'none'; 

		if( counter != 0) {

		currentShip += 1;		
		}
		
		counter += 1;

		return;
	}


//:::::::::::::::::::


function shipDisplay(length, startElement, shipOrdin){

	if(shipOrdin === 'horizont') {

		if(length == 4) {

			document.getElementById(startElement).style.backgroundImage = "url('images/shipBack.png')";
			document.getElementById(parseInt(startElement)+1).style.backgroundImage = "url('images/shipMiddle.png')";
			document.getElementById(parseInt(startElement)+2).style.backgroundImage = "url('images/shipMiddle.png')";
			document.getElementById(parseInt(startElement)+3).style.backgroundImage = "url('images/shipFront.png')";
		} else if (length == 3) {

			document.getElementById(startElement).style.backgroundImage = "url('images/shipBack.png')";
			document.getElementById(parseInt(startElement)+1).style.backgroundImage = "url('images/shipMiddle.png')";			
			document.getElementById(parseInt(startElement)+2).style.backgroundImage = "url('images/shipFront.png')";
		} else if (length == 2) {

			document.getElementById(startElement).style.backgroundImage = "url('images/shipBack.png')";			
			document.getElementById(parseInt(startElement)+1).style.backgroundImage = "url('images/shipFront.png')";
		} else if (lenght == 1) {
			
			document.getElementById(parseInt(startElement)).style.backgroundImage = "url('images/shipFront.png')";
		}
	} else if (shipOrdin === 'vertical') {

		if(length == 4) {
			document.getElementById(startElement).style.backgroundImage = "url('images/shipBackVert.png')";
			document.getElementById(parseInt(startElement)+12).style.backgroundImage = "url('images/shipMiddleVert.png')";
			document.getElementById(parseInt(startElement)+24).style.backgroundImage = "url('images/shipMiddleVert.png')";
			document.getElementById(parseInt(startElement)+36).style.backgroundImage = "url('images/shipFrontVert.png')";
		} else if (length == 3) {

			document.getElementById(startElement).style.backgroundImage = "url('images/shipBackVert.png')";
			document.getElementById(parseInt(startElement)+12).style.backgroundImage = "url('images/shipMiddleVert.png')";			
			document.getElementById(parseInt(startElement)+24).style.backgroundImage = "url('images/shipFrontVert.png')";
		} else if (length == 2) {

			document.getElementById(startElement).style.backgroundImage = "url('images/shipBackVert.png')";			
			document.getElementById(parseInt(startElement)+12).style.backgroundImage = "url('images/shipFrontVert.png')";
		} else if (length == 1) {
						
			document.getElementById(parseInt(startElement)).style.backgroundImage = "url('images/shipFrontVert.png')";
		}
	}
}


//scoreboard  func
document.getElementById('player1').value = player1score + " / " + 20;
document.getElementById('player2').value = player2score + " / " + 20;