var clicktElement;
var clicketParent;
var clicktPlace;
var shipsOrdin = ['horizont', 'vertical'];
var playerField = [];
var computerField = [];
var playerShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
var playerShipOrientation = 0;
var currentShip = 0;
var counter = 0;
var playerTurn = 0;
var player1score = 0;
var player2score = 0;
var isShootedComputer = 0;
var explosionStop = 0;
var compFIeldMap = 0;
var currentField = 'computerField';
var isGameStarted = false;

// computerField -> 0-epmty non-clicket (white-transperant); 1-ship - non-clicket (white-transperant);
//                  2 ship-damaged (red); 3 empty - clicket (transperant); 4 ship-sinket (black)

//coloring computerField when player shoot
initialCompField();

function myFunction(e) {

    clicktElement = e.target.id;
    clicktParent = e.target.parentNode.id;


    if ((counter < 11) && (clicktParent !== 'field2') && (checkForMistakes(clicktElement, clicktParent))) {

        shipDisplay(playerShips[currentShip], clicktElement, shipsOrdin[playerShipOrientation], clicktParent);

        if (counter < 10) {

        createPlayFields();

        }
    } 
    if(counter == 10){

        isGameStarted = true;
        startShootingPrompt();
    }
    if ((counter > 10) && isGameStarted) {

        playerShoot(clicktElement, clicktParent);
    }
    if (player1score == 20) {

        playerWinPrompt();
    } else if (player2score == 20) {

        computerWinPrompt();
    }
}

function checkForMistakes(cl, fieldName) {

    var right;

// :::::::::::::::::::::::::::::::::::: PLAYER FIELD CHECK ::::::::::::::::::::::::::::::::::::::::::::::::
 
    if (fieldName == 'field1') {

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

// :::::::::::::::::::::::::::::: COMPYTER FIELD CHECK :::::::::::::::::::::::::::::::::::::::::

    } else {

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
                    cl == 129 || cl == 141) {

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
                     cl == 130 || cl == 142) || ((computerField[parseInt(cl)] !== 0) || (computerField[parseInt(cl) + 1] !== 0)
                  || (computerField[parseInt(cl) + 2] !== 0))) {                 

                     right = false;

                     return right;

                 } else {

                 right = true;
                 }
             }

             else if(currentShip == 3 || currentShip == 4 || currentShip == 5) {

                if ((cl == 11 || cl == 23 || cl == 35 || cl == 47 || cl == 59 ||
                     cl == 71 || cl == 95 || cl == 107 || cl == 119 || cl == 131 || cl == 143) 
                     || ((computerField[parseInt(cl)] !== 0) || (computerField[parseInt(cl) + 1] !== 0))) {

                    right = false;

                    return right;
                } else {

                   right = true;
                }
            }

            else if (currentShip == 6 || currentShip == 7 || currentShip == 8 || currentShip == 9) {

                 if (computerField[parseInt(cl)] !== 0) {

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
                    cl == 109 || cl == 108) {

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
                    cl == 124 || cl == 123 || cl == 122 || cl == 121) || ((computerField[parseInt(cl)] !== 0) || 
                    (computerField[parseInt(cl) + 12] !== 0) || (computerField[parseInt(cl) + 24] !== 0))) {

                    right = false;

                    return right;

                } else {

                    right = true;
                }

            } else if (currentShip == 3 || currentShip == 4 || currentShip == 5) {

                if  ((cl == 143 || cl == 142 || cl == 141 || cl == 141 || cl == 140 ||
                    cl == 139 || cl == 138 || cl == 137 || cl == 136 || cl == 135 ||
                    cl == 134 || cl == 133) || ((computerField[parseInt(cl)] !== 0) || 
                    (computerField[parseInt(cl) + 12] !== 0))) {


                    right = false;

                    return right;

                } else {

                    right = true;
                }

            } else if (currentShip == 6 || currentShip == 7 || currentShip == 8 || currentShip == 9) {

                if  (computerField[parseInt(cl)] !== 0) {

                    right = false;
                    return right;
                } else {

                    right = true;
                }
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

// function gameAction() {

//     if(playerTurn = 1) {
//         computerShoot();
//     }
//     else if(playerTurn == 0){
//         playerShoot();
//     }
// }

function playerShoot(elem, parent) {

    
    var attackedZone = elem;
    var par = parent;

    if( attackedZone == 'wrapper' || par == 'field1') {
        alert('not a valid field');
    }
    else {

        if (computerField[parseInt(attackedZone)] == 1) {
            var boomWav = new Audio("sounds/boom.wav");
            setInterval(boomWav.play(),2000);
            var scream = [new Audio("sounds/scream.mp3"), new Audio("sounds/scream2.mp3"), new Audio("sounds/scream3.mp3")];
            scream[ Math.floor(Math.random() * 3)].play();
            document.getElementById(attackedZone).style.backgroundImage = "url('images/sign1.png')";
            document.getElementById(attackedZone).style.backgroundColor = 'transparent';
            computerField[parseInt(attackedZone)] = 2;

            playerTurn = 1;
            player1score += 1;

            var divr = document.getElementById(attackedZone);
            var rect = divr.getBoundingClientRect();
            document.getElementById('player1').value = player1score + " / " + 20;
            document.getElementById('boom').style.left = rect.left + 'px';
            document.getElementById('boom').style.top = rect.top + 'px';
            document.getElementById('boom').style.visibility = 'visible';


        } else if (computerField[parseInt(attackedZone)] == 0) {

            document.getElementById(attackedZone).style.backgroundColor = 'transparent';
            computerField[parseInt(attackedZone)] = 3;
            playerTurn = 1;
            var blop = new Audio("sounds/splash.mp3");
            blop.play();

        } else if (computerField[parseInt(attackedZone)] == 2) {
            alert('already attacked this zone ' );

        } else if (computerField[parseInt(attackedZone)] == 3) {
            alert('already attacked this zone ' );
        } else if (computerField[parseInt(attackedZone)] == 4) {
            alert('already attacked this zone ' );
        }
    }
    if(isGameStarted){
         document.getElementById('cover').style.display = 'block';
        setTimeout(computerShoot, 1000);
    }
    
    //computerShoot();
}

function computerShoot() {

 
    var curentCompShoot = Math.floor(Math.random() * 144);

    if ((playerField[curentCompShoot] == 0) && isGameStarted) {

        playerField[curentCompShoot] = 3;
        document.getElementById(curentCompShoot).style.backgroundImage = "url('images/dot.png')";
        isShootedComputer += 1;
    }
    if (playerField[curentCompShoot] == 1) {

        playerField[curentCompShoot] = 2;
        player2score += 1;
        isShootedComputer += 1;
        document.getElementById('player2').value = player2score + " / " + 20;
        document.getElementById(curentCompShoot).style.backgroundImage = "url('images/sign1.png')";
    }
    if ((isShootedComputer == 0) && (playerField[curentCompShoot] == 2 || playerField[curentCompShoot] == 3 || playerField[curentCompShoot] == 4)) {
 
       var blop = new Audio("sounds/blop.wav");
       blop.play();
        computerShoot();
    }

     document.getElementById('cover').style.display = 'none';
    isShootedComputer = 0;
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
    var voice = [new Audio("sounds/gimme2.wav"), new Audio("sounds/trying.wav"),
        new Audio("sounds/sweet_merciful_crap.wav"),new Audio("sounds/man_v_machine.wav"),
        new Audio("sounds/what_the_hell2.wav"), new Audio("sounds/run_for_your_lives_x.wav"), new Audio("sounds/stop_the_presses.wav")];
    voice[ Math.floor(Math.random() * 5)].play();

    if(length == 1){

        document.getElementById('playerFieldPrompt').style.display = 'block';
        document.getElementById('0c').style.display = 'none';
        document.getElementById('shipType').style.display = 'none';
        document.getElementById('directionP').innerHTML = 'next ship is ' + length + 'cell';
        document.getElementById('1c').innerHTML = 'OK';
        document.getElementById('cover').style.display = 'block';
    } else {

    document.getElementById('playerFieldPrompt').style.display = 'block';
    document.getElementById('cover').style.display = 'block';
    document.getElementById('shipType').innerHTML = 'ship length : ' + length + ' cells';
    }
}   
    
function playerShipOrient(e) {

    var clickElem = e.target.id;

    if ((clickElem == '0c') || (clickElem == '1c')) {

        playerShipOrientation = parseInt(clickElem);

        document.getElementById('playerFieldPrompt').style.display = 'none';
        document.getElementById('cover').style.display = 'none'; 

        if( counter != 0) {

           currentShip += 1;    
        }

        counter += 1;

        return;
    }
}

function shipDisplay(length, startElement, shipOrdin, currentField){

    if(shipOrdin === 'horizont') {

        if(length == 4) {
            if (currentField == 'field1') {
                playerField[startElement] = 1;
                playerField[parseInt(startElement) + 1] = 1;
                playerField[parseInt(startElement) + 2] = 1;
                playerField[parseInt(startElement) + 3] = 1;

                document.getElementById(startElement).style.backgroundImage = "url('images/4ship/4ship-nose.png')";
                document.getElementById(parseInt(startElement)+1).style.backgroundImage = "url('images/4ship/4ship-middle-1.png')";
                document.getElementById(parseInt(startElement)+2).style.backgroundImage = "url('images/4ship/4ship-middle-2.png')";
                document.getElementById(parseInt(startElement)+3).style.backgroundImage = "url('images/4ship/4ship-tail.png')";
            } else {
                computerField[startElement] = 1;
                computerField[parseInt(startElement) + 1] = 1;
                computerField[parseInt(startElement) + 2] = 1;
                computerField[parseInt(startElement) + 3] = 1;
            }
        } else if (length == 3) {
            if (currentField == 'field1') {
                playerField[startElement] = 1;
                playerField[parseInt(startElement) + 1] = 1;
                playerField[parseInt(startElement) + 2] = 1;

                document.getElementById(startElement).style.backgroundImage = "url('images/3ship/3ship-1.png')";
                document.getElementById(parseInt(startElement)+1).style.backgroundImage = "url('images/3ship/3ship-2.png')";
                document.getElementById(parseInt(startElement)+2).style.backgroundImage = "url('images/3ship/3ship-3.png')";
            } else {
                computerField[startElement] = 1;
                computerField[parseInt(startElement) + 1] = 1;
                computerField[parseInt(startElement) + 2] = 1;
            }
        } else if (length == 2) {
            if (currentField == 'field1') {
                playerField[parseInt(startElement)] = 1;
                playerField[parseInt(startElement) + 1] = 1;

                document.getElementById(startElement).style.backgroundImage = "url('images/2ship/2ship-tail.png')";
                document.getElementById(parseInt(startElement)+1).style.backgroundImage = "url('images/2ship/2ship-nose.png')";
            } else {
                computerField[startElement] = 1;
                computerField[parseInt(startElement) + 1] = 1;
            }
        } else if (length = 1) {

            if (currentField == 'field1') {
                playerField[parseInt(startElement)] = 1;
            
                document.getElementById(parseInt(startElement)).style.backgroundImage = "url('images/1ship.png')";
            } else {
                computerField[startElement] = 1;
            }    
        }
    } else if (shipOrdin = 'vertical') {

        if(length == 4) {
            if (currentField == 'field1') {
                playerField[startElement] = 1;
                playerField[parseInt(startElement) + 12] = 1;
                playerField[parseInt(startElement) + 24] = 1;
                playerField[parseInt(startElement) + 36] = 1;

                document.getElementById(startElement).style.backgroundImage = "url('images/4ship/4ship-nose-vert.png')";
                document.getElementById(parseInt(startElement)+12).style.backgroundImage = "url('images/4ship/4ship-middle-1-vert.png')";
                document.getElementById(parseInt(startElement)+24).style.backgroundImage = "url('images/4ship/4ship-middle-2-vert.png')";
                document.getElementById(parseInt(startElement)+36).style.backgroundImage = "url('images/4ship/4ship-tail-vert.png')";
            } else {
                computerField[startElement] = 1;
                computerField[parseInt(startElement) + 12] = 1;
                computerField[parseInt(startElement) + 24] = 1;
                computerField[parseInt(startElement) + 36] = 1;
            }
        } else if (length == 3) {
            if (currentField == 'field1') {
                playerField[startElement] = 1;
                playerField[parseInt(startElement) + 12] = 1;
                playerField[parseInt(startElement) + 24] = 1;

                document.getElementById(startElement).style.backgroundImage = "url('images/3ship/3ship-1-vert.png')";
                document.getElementById(parseInt(startElement)+12).style.backgroundImage = "url('images/3ship/3ship-2-vert.png')";
                document.getElementById(parseInt(startElement)+24).style.backgroundImage = "url('images/3ship/3ship-3-vert.png')";
            } else {
                computerField[startElement] = 1;
                computerField[parseInt(startElement) + 12] = 1;
                computerField[parseInt(startElement) + 24] = 1;
            }
        } else if (length == 2) {
            if (currentField == 'field1') {
                playerField[startElement] = 1;
                playerField[parseInt(startElement) + 12] = 1;

                document.getElementById(startElement).style.backgroundImage = "url('images/2ship/2ship-nose-vert.png')";
                document.getElementById(parseInt(startElement)+12).style.backgroundImage = "url('images/2ship/2ship-tail-vert.png')";
            } else {
                computerField[startElement] = 1;
                computerField[parseInt(startElement) + 12] = 1;
            }
        } else if (length == 1) {
            if (currentField == 'field1') {
                 playerField[startElement] = 1;
                          
                 document.getElementById(parseInt(startElement)).style.backgroundImage = "url('images/1ship.png')";
            } else {
                computerField[startElement] = 1;
            }
        }
    }
}

function computerFieldCreation() {

    var randCell = Math.floor((Math.random() * 144));
    var randShipOrient = Math.floor((Math.random() * 2));;

    if (checkForMistakes(randCell, currentField)) {
           
        shipDisplay(playerShips[currentShip], randCell, shipsOrdin[randShipOrient], currentField);
    } 
    else {

        computerFieldCreation();
    } 


}

function initialCompField() {


    for (var i = 0; i < 144; i++) {
        
        computerField[i] = 0;
    };
    for (var i = 0; i < playerShips.length; i += 1) {

        currentShip = i;
        computerFieldCreation();
    };

    currentField = 'playerField';

    currentShip = 0;

    counter = 0;

    createPlayFields();
}

function startShootingPrompt() {

    document.getElementById('playerFieldPrompt').style.display = 'block';
    document.getElementById('playerFieldPrompt').style.backgroundColor = '#C70000';
    document.getElementById('playerFieldPrompt').style.height = '120px';
    document.getElementById('playerFieldPrompt').style.width = '350px';
    document.getElementById('playerFieldPrompt').style.left = '450px';
    document.getElementById('0c').style.display = 'none';
    document.getElementById('shipType').style.display = 'none';
    document.getElementById('directionP').innerHTML = 'Now The Real Game Begins ! Kill Them All!';
    document.getElementById('directionP').style.fontSize = "3rem";
    document.getElementById('1c').innerHTML = 'OK';
    document.getElementById('1c').style.backgroundColor = "#900000";
    document.getElementById('cover').style.display = 'block';
    var mad = new Audio("sounds/mad.wav");
    mad.play();
}

function playerWinPrompt() {

    document.getElementById('playerFieldPrompt').style.display = 'block';
    document.getElementById('playerFieldPrompt').style.backgroundColor = '#C70000';
    document.getElementById('playerFieldPrompt').style.width = '350px';
    document.getElementById('playerFieldPrompt').style.left = '450px';
    document.getElementById('0c').style.display = 'none';
    document.getElementById('shipType').style.display = 'none';
    document.getElementById('directionP').innerHTML = 'You Win! You Destroyed Those Fucking Pirates!';
    document.getElementById('directionP').style.fontSize = "3rem";
    document.getElementById('1c').innerHTML = 'OK';
    document.getElementById('1c').href = '';
    document.getElementById('1c').style.backgroundColor = "#900000";
    document.getElementById('cover').style.display = 'block';
    var yes = new Audio("sounds/blah1.wav");
   // setTimeout(yes.play(), 3000);
}

function computerWinPrompt() {

    document.getElementById('playerFieldPrompt').style.display = 'block';
    document.getElementById('playerFieldPrompt').style.backgroundColor = '#C70000';
    document.getElementById('playerFieldPrompt').style.height = '120px';
    document.getElementById('playerFieldPrompt').style.left = '450px';
    document.getElementById('0c').style.display = 'none';
    document.getElementById('shipType').style.display = 'none';
    document.getElementById('directionP').innerHTML = 'You Lose! Go Home To Lick Your Wounds!';
    document.getElementById('directionP').style.fontSize = "3rem";
    document.getElementById('1c').innerHTML = 'OK';
    document.getElementById('1c').style.backgroundColor = "#900000";
    document.getElementById('cover').style.display = 'block';
    var no = new Audio("sounds/what_the_hell2.wav");
    //setTimeout(no.play(), 1000);
}