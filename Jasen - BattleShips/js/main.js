var clicktElement;
var clicketParent;
var shipsOrdin = ['horizont', 'vertical'];
var playerField = [];


function myFunction(e) {

	var clicktElement = e.target.id;
    var clicketParent = e.target.parentNode.id;
    //alert(parseInt(clicktElement)+1);


    shipForHorizont(2, clicktElement, shipsOrdin[1]);
    
}

function createPlayFields() {

	function initialPLayerField(){

		for (var i = 0; i < 144; i++) {
	
			playerField[i] = 0;
		};

		

	}
}

function shipForHorizont(lenght, startElement, shipOrdin){

	if(shipOrdin == 'horizont') {

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
		}
	} else if (shipOrdin == 'vertical') {

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
		}
	}
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}
