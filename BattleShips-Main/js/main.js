var clicktElement;
var clicketParent;
var shipsOrdin = ['horizont', 'vertical'];
var playerField = [];
var computerField = [];
var playerShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
var playerShipOrientation = 1;
var currentShip = 0;
var counter = 0;
var player1score = 12;
var player2score = 0;

function myFunction(e) {

	clicktElement = e.target.id;
    clicketParent = e.target.parentNode.id;

    checkForMistakes(clicktElement);

    if ((counter < 11) ) {

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

            if (cl == 10 || cl == 11 || cl == 12 || cl == 22 || cl == 23 ||
                cl == 24 || cl == 34 || cl == 35 || cl == 36 || cl == 46 ||
                cl == 47 || cl == 48 || cl == 58 || cl == 59 || cl == 60 ||
                cl == 70 || cl == 71 || cl == 72 || cl == 82 || cl == 83 ||
                cl == 84 || cl == 94 || cl == 95 || cl == 96 || cl == 106 ||
                cl == 107 || cl == 108 || cl == 118 || cl == 119 || cl == 120 ||
                cl == 130 || cl == 131 || cl == 132 || cl == 141 || cl == 142 || cl == 143) {
                alert('false');
                right = false;
                return right;
                //tuk ne trqbva li prosto da izvikame playerShipOrient(e) i prosto currentShip-=1,
                // taka da se vyrnem otnovo na postavqneto na syshtiq korab
            }

            else {

                right = true;
            }
        }

         else if(currentShip == 1) {

             if (cl == 11 || cl == 23 || cl == 35 || cl == 47 || cl == 59 ||
                 cl == 71 || cl == 95 || cl == 107 || cl == 119 || cl == 131 ||
                 cl == 143 || cl == 10 || cl == 22 || cl == 34 || cl == 46	||
                 cl == 58 || cl == 70 || cl == 94 || cl == 106 || cl == 118 ||
                 cl == 130 || cl == 142) {
                 alert('false');
                 right = false;
                 return right;
             }
             else {
             right = true;
             }
         }

         else if(currentShip == 3 || currentShip == 4 || currentShip == 5) {

             if (cl == 11 || cl == 23 || cl == 35 || cl == 47 || cl == 59 ||
                 cl == 71 || cl == 95 || cl == 107 || cl == 119 || cl == 131 || cl == 143) {
                 alert('false');
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

    if(playerShipOrientation == 1) {

        if(currentShip == 0) {

            if (cl == 143 || cl == 142 || cl == 141 || cl == 140 ||
                cl == 139 || cl == 138 || cl == 137 || cl == 136 || cl == 135 ||
                cl == 134 || cl == 133 || cl == 132 || cl == 131 || cl == 130 ||
                cl == 129 || cl == 128 || cl == 127 || cl == 126 || cl == 125 ||
                cl == 124 || cl == 123 || cl == 122 || cl == 121 || cl == 120 ||
                cl == 119 || cl == 118 || cl == 117 || cl == 116 || cl == 115 ||
                cl == 114 || cl == 113 || cl == 112 || cl == 111 || cl == 110 ||
                cl == 109 || cl == 108) {

                alert('false');
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

            if (cl == 143 || cl == 142 || cl == 141 || cl == 141 || cl == 140 ||
                cl == 139 || cl == 138 || cl == 137 || cl == 136 || cl == 135 ||
                cl == 134 || cl == 133 || cl == 132 || cl == 131 || cl == 130 ||
                cl == 129 || cl == 128 || cl == 127 || cl == 126 || cl == 125 ||
                cl == 124 || cl == 123 || cl == 122 || cl == 121) {
                alert('false');
                right = false;
                return right;
            }
            else {
                right = true;
            }

        }
        else if(currentShip == 3 || currentShip == 4 || currentShip == 5) {

            if (cl == 143 || cl == 142 || cl == 141 || cl == 141 || cl == 140 ||
                cl == 139 || cl == 138 || cl == 137 || cl == 136 || cl == 135 ||
                cl == 134 || cl == 133) {

                alert('false');
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


	initialPLayerField();
}

function initialPLayerField(){		

	if (counter == 0) {	
		for (var i = 0; i < 144; i++) {
	
			playerField[i] = 0;
		};
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

			//alert(playerField);

			document.getElementById(startElement).style.backgroundImage = "url('images/shipBack.png')";
			document.getElementById(parseInt(startElement)+1).style.backgroundImage = "url('images/shipMiddle.png')";
			document.getElementById(parseInt(startElement)+2).style.backgroundImage = "url('images/shipMiddle.png')";
			document.getElementById(parseInt(startElement)+3).style.backgroundImage = "url('images/shipFront.png')";

		
			palyerField[startElement] = 1;
			palyerField[startElement + 1] = 1;
			palyerField[startElement + 2] = 1;
			palyerField[startElement + 3] = 1;

			alert(playerField);


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

function computerFieldCreation() {


}
//scoreboard  func
// document.getElementById('player1').value = player1score + " / " + 20;
// document.getElementById('player2').value = player2score + " / " + 20;