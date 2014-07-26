var boom = new Audio("sounds/boom.wav"); // buffers automatically when created
var blop = new Audio("sounds/blop.wav");



var clicktElement;
var clicketParent;
var shipsOrdin = ['horizont', 'vertical'];
var playerField = [];
var computerField = [];
var playerShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
var playerShipOrientation = 0;
var currentShip = 0;
var counter = 0;
var playerTurn = 0;
var player1score = 12;
var player2score = 0;
//var shipArrayPlayer1 = newFilledArray(144,0);
//var shipArrayPlayer2 = newFilledArray(144,0);


// computerField -> 0-epmty non-clicket (white-transperant); 1-ship - non-clicket (white-transperant);
//                  2 ship-damaged (red); 3 empty - clicket (transperant); 4 ship-sinket (black)

//tazi funkciq pulni array s daden value


//function newFilledArray(length, value) {
//    var arr = new Array(length);
//    while (--length >= 0) {
//        arr[length] = value;
//    }
//    return arr;
//}


//coloring computerField when player shoot
initialCompField();



function myFunction(e) {

    clicktElement = e.target.id;

    clicktParent = e.target.parentNode.id;
    

   if (checkForMistakes(clicktElement)) {

        if (counter == 10) {

            counter += 1;
        };
        if ((counter < 11) && (clicktParent !== 'field2')) {

            shipDisplay(playerShips[currentShip], clicktElement, shipsOrdin[playerShipOrientation]);

            if (counter < 10) {

            createPlayFields();

            }
        }
    } 
    if ( clicktParent == 'field2') {

        playerShoot(clicktElement);
    }
}

function checkForMistakes(cl) {

    var right;

    if(playerShipOrientation == 0) {

        if(currentShip == 0) {

            if  (cl == 10 || cl == 11 || cl == 12 || cl == 22 || cl == 23 ||
                cl == 24 || cl == 34 || cl == 35 || cl == 36 || cl == 46 ||
                cl == 47 || cl == 48 || cl == 58 || cl == 59 || cl == 60 ||
                cl == 70 || cl == 71 || cl == 72 || cl == 82 || cl == 83 ||
                cl == 84 || cl == 94 || cl == 95 || cl == 96 || cl == 106 ||
                cl == 107 || cl == 108 || cl == 118 || cl == 119 || cl == 120 ||
                cl == 130 || cl == 131 || cl == 132 || cl == 141 || cl == 142 || cl == 143 ||                 
                cl == 69 || cl == 81 || cl == 93 || cl == 105 || cl == 117 ||
                cl == 9 || cl == 21 || cl == 33 || cl == 45 || cl == 57 ||
                cl == 129 || cl == 141 || cl == 'wrapper' || cl == 'field1') {


                alert('Wrong FIeld Try Another One');

                right = false;

                return right;

            }  else {

                right = true;
            }

        } else if (currentShip == 1 || currentShip == 2) {

             if  ((cl == 11 || cl == 23 || cl == 35 || cl == 47 || cl == 59 ||
                 cl == 71 || cl == 95 || cl == 107 || cl == 119 || cl == 131 ||
                 cl == 143 || cl == 10 || cl == 22 || cl == 34 || cl == 46  ||
                 cl == 58 || cl == 70 || cl == 94 || cl == 106 || cl == 118 ||
                 cl == 130 || cl == 142) || ((playerField[parseInt(cl)] !== 0) || (playerField[parseInt(cl) + 1] !== 0)
              || (playerField[parseInt(cl) + 2] !== 0) || cl == 'wrapper' || cl == 'field1')) {
                 alert('Wrong FIeld Try Another One');

                 right = false;

                 return right;

             } else {

             right = true;
             }
         }

         else if(currentShip == 3 || currentShip == 4 || currentShip == 5) {

            if ((cl == 11 || cl == 23 || cl == 35 || cl == 47 || cl == 59 ||
                 cl == 71 || cl == 95 || cl == 107 || cl == 119 || cl == 131 || cl == 143) 
                 || ((playerField[parseInt(cl)] !== 0) || (playerField[parseInt(cl) + 1] !== 0) ||
                    cl == 'wrapper' || cl == 'field1')) {
                 
                alert('Wrong FIeld Try Another One');

                right = false;

                return right;
            } else {

               right = true;
            }
        }

        else if (currentShip == 6 || currentShip == 7 || currentShip == 8 || currentShip == 9) {

             if (playerField[parseInt(cl)] !== 0) {
                 
                alert('Wrong FIeld Try Another One');

                right = false;

                return right;
            } else {

               right = true;
            }

        }
    }

    if(playerShipOrientation == 1) {

        if(currentShip == 0) {

            if  (cl == 143 || cl == 142 || cl == 141 || cl == 140 ||
                cl == 139 || cl == 138 || cl == 137 || cl == 136 || cl == 135 ||
                cl == 134 || cl == 133 || cl == 132 || cl == 131 || cl == 130 ||
                cl == 129 || cl == 128 || cl == 127 || cl == 126 || cl == 125 ||
                cl == 124 || cl == 123 || cl == 122 || cl == 121 || cl == 120 ||
                cl == 119 || cl == 118 || cl == 117 || cl == 116 || cl == 115 ||
                cl == 114 || cl == 113 || cl == 112 || cl == 111 || cl == 110 ||
                cl == 109 || cl == 108 || cl == 'wrapper' || cl == 'field1') {

                alert('Wrong FIeld Try Another One');

                right = false;

                return right;

            } else {

                right = true;
            }

        } else if (currentShip == 1 || currentShip == 2) {

            if  ((cl == 143 || cl == 142 || cl == 141 || cl == 141 || cl == 140 ||
                cl == 139 || cl == 138 || cl == 137 || cl == 136 || cl == 135 ||
                cl == 134 || cl == 133 || cl == 132 || cl == 131 || cl == 130 ||
                cl == 129 || cl == 128 || cl == 127 || cl == 126 || cl == 125 ||
                cl == 124 || cl == 123 || cl == 122 || cl == 121) || ((playerField[parseInt(cl)] !== 0) || 
                (playerField[parseInt(cl) + 12] !== 0) || (playerField[parseInt(cl) + 24] !== 0) ||
                cl == 'wrapper' || cl == 'field1')) {

                alert('Wrong FIeld Try Another One');

                right = false;

                return right;

            } else {

                right = true;
            }

        } else if (currentShip == 3 || currentShip == 4 || currentShip == 5) {

            if  ((cl == 143 || cl == 142 || cl == 141 || cl == 141 || cl == 140 ||
                cl == 139 || cl == 138 || cl == 137 || cl == 136 || cl == 135 ||
                cl == 134 || cl == 133) || ((playerField[parseInt(cl)] !== 0) || 
                (playerField[parseInt(cl) + 12] !== 0) || cl == 'wrapper' || cl == 'field1')) {

                alert('Wrong FIeld Try Another One');

                right = false;

                return right;

            } else {

                right = true;
            }

        } else if (currentShip == 6 || currentShip == 7 || currentShip == 8 || currentShip == 9) {

            if  (playerField[parseInt(cl)] !== 0 || cl == 'wrapper' || cl == 'field1') {

                alert('Wrong FIeld Try Another One');

                right = false;

                return right;

            } else {

                right = true;
            }
        }

    }
        return right;
}




//LOGIKATA na IGRATA SLED START-a

// computerField -> 0-epmty non-clicket (white-transperant);
//                 1-ship - non-clicket (white-transperant);
//                  2 ship-damaged (red);
//                  3 empty - clicket (transperant);
//                   4 ship-sinket (black)

function gameAction() {

    if(playerTurn = 1) {
        computerShoot();
    }
    else if(playerTurn == 0){
        playerShoot();
    }
}

function playerShoot(e) {
    attackedZone = e;
    if( attackedZone == 'wrapper' || attackedZone == 'field2') {
        alert('not a valid field');
    }
    else {

        if (computerField[parseInt(attackedZone)] == 1) {
            boom.play();
            document.getElementById(attackedZone).style.backgroundColor = "red";

            computerField[parseInt(attackedZone)] = 2;
            playerTurn = 1;

        } else if (computerField[parseInt(attackedZone)] == 0) {
            blop.play();
            document.getElementById(attackedZone).style.backgroundColor = 'transparent';
            computerField[parseInt(attackedZone)] = 3;
            playerTurn = 1;

        } else if (computerField[parseInt(attackedZone)] == 2) {
            alert('already attacked this zone');
        } else if (computerField[parseInt(attackedZone)] == 3) {
            alert('already attacked this zone');
        } else if (computerField[parseInt(attackedZone)] == 4) {
            alert('already attacked this zone');
        }
    }

}

function computerShoot() {

    var curentCompShoot = Math.floor(Math.random() * 144);

    if (playerField[curentCompShoot] == 0) {

        playerField[curentCompShoot] = 3;

        document.getElementById(curentCompShoot).style.background = '#FFF';

    }
    if (playerField[curentCompShoot] == 1) {

        playerField[curentCompShoot] = 2;
        player2score++;
        document.getElementById('player2').value = player2score + " / " + 20;
        document.getElementById(curentCompShoot).style.background = '#FF0000';

    }
    if (playerField[curentCompShoot] == 2 || playerField[curentCompShoot] == 3 || playerField[curentCompShoot] == 4) {
        computerShoot();
    }

    playerTurn = 0;
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

    return;
}

function shipDisplay(length, startElement, shipOrdin){

    if(shipOrdin === 'horizont') {

        if(length == 4) {

            playerField[startElement] = 1;
            playerField[parseInt(startElement) + 1] = 1;
            playerField[parseInt(startElement) + 2] = 1;
            playerField[parseInt(startElement) + 3] = 1;

            document.getElementById(startElement).style.backgroundImage = "url('images/shipBack.png')";
            document.getElementById(parseInt(startElement)+1).style.backgroundImage = "url('images/shipMiddle.png')";
            document.getElementById(parseInt(startElement)+2).style.backgroundImage = "url('images/shipMiddle.png')";
            document.getElementById(parseInt(startElement)+3).style.backgroundImage = "url('images/shipFront.png')";

        } else if (length == 3) {

            playerField[startElement] = 1;
            playerField[parseInt(startElement) + 1] = 1;
            playerField[parseInt(startElement) + 2] = 1;

            document.getElementById(startElement).style.backgroundImage = "url('images/shipBack.png')";
            document.getElementById(parseInt(startElement)+1).style.backgroundImage = "url('images/shipMiddle.png')";           
            document.getElementById(parseInt(startElement)+2).style.backgroundImage = "url('images/shipFront.png')";
        } else if (length == 2) {

            playerField[startElement] = 1;
            playerField[parseInt(startElement) + 1] = 1;

            document.getElementById(startElement).style.backgroundImage = "url('images/shipBack.png')";         
            document.getElementById(parseInt(startElement)+1).style.backgroundImage = "url('images/shipFront.png')";

        } else if (lenght == 1) {

            playerField[startElement] = 1;
            
            document.getElementById(parseInt(startElement)).style.backgroundImage = "url('images/shipFront.png')";
        }
    } else if (shipOrdin === 'vertical') {

        if(length == 4) {

            playerField[startElement] = 1;
            playerField[parseInt(startElement) + 12] = 1;
            playerField[parseInt(startElement) + 24] = 1;
            playerField[parseInt(startElement) + 36] = 1;

            document.getElementById(startElement).style.backgroundImage = "url('images/shipBackVert.png')";
            document.getElementById(parseInt(startElement)+12).style.backgroundImage = "url('images/shipMiddleVert.png')";
            document.getElementById(parseInt(startElement)+24).style.backgroundImage = "url('images/shipMiddleVert.png')";
            document.getElementById(parseInt(startElement)+36).style.backgroundImage = "url('images/shipFrontVert.png')";
    
        } else if (length == 3) {

            playerField[startElement] = 1;
            playerField[parseInt(startElement) + 12] = 1;
            playerField[parseInt(startElement) + 24] = 1;

            document.getElementById(startElement).style.backgroundImage = "url('images/shipBackVert.png')";
            document.getElementById(parseInt(startElement)+12).style.backgroundImage = "url('images/shipMiddleVert.png')";          
            document.getElementById(parseInt(startElement)+24).style.backgroundImage = "url('images/shipFrontVert.png')";

        } else if (length == 2) {

            playerField[startElement] = 1;
            playerField[parseInt(startElement) + 12] = 1;

            document.getElementById(startElement).style.backgroundImage = "url('images/shipBackVert.png')";         
            document.getElementById(parseInt(startElement)+12).style.backgroundImage = "url('images/shipFrontVert.png')";
    
        } else if (length == 1) {

             playerField[startElement] = 1;
                        
            document.getElementById(parseInt(startElement)).style.backgroundImage = "url('images/shipFrontVert.png')";
        }
    }
    counter += 1;

}

function computerFieldCreation() {


}

function initialCompField() {

    for (var i = 0; i < 144; i++) {
        
        computerField[i] = 0;
    };
    //chetvorka
    computerField[1] = 1;
    computerField[2] = 1;
    computerField[3] = 1;
    computerField[4] = 1;
    //purva 3ka
    computerField[18] = 1;
    computerField[30] = 1;
    computerField[42] = 1;
    //vtora 3ka
    computerField[49] = 1;
    computerField[50] = 1;
    computerField[51] = 1;
    //purva 2ka
    computerField[77] = 1;
    computerField[89] = 1;
    //vtora 2ka
    computerField[125] = 1;
    computerField[126] = 1;
    //treta 2ka
    computerField[77] = 1;
    computerField[89] = 1;
    //purva 1ca
    computerField[110] = 1;
    //vtora 1ca
    computerField[58] = 1;
    //treta 1ca
    computerField[143] = 1;
    //chetvurta 1ca
    computerField[12] = 1;


    var initialCompShipsDirection = Math.floor(((Math.random() * 10) +1) % 2);
    
    for (var i = 0; i < playerShips.length ; i++) {
        

    };
}
//scoreboard  func
// document.getElementById('player1').value = player1score + " / " + 20;
// document.getElementById('player2').value = player2score + " / " + 20;