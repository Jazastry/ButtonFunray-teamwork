function gridLines(a, b, c, d){

var canv = document.getElementById("mainCanvas");
var ctx = canv.getContext("2d");
ctx.moveTo(a,b);
ctx.lineTo(c,d);
ctx.stroke();
}

for(var i = 0; i <= 500; i += 20){

     gridLines(0, i,150, i)
    
}

