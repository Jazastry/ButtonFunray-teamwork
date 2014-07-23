function line(a, b, c, d){
    var doc = document.getElementById("myBoard");
    var ctx = doc.getContext("2d");
    ctx.moveTo(a, b);
    ctx.lineTo(c, d);
    ctx.stroke();
}

for (var i = 1; i < 13; i++){
    line(i * 42, 0, i * 42, 504);
    line(804, 0, 804, 504);
    if (i < 12){
        line(804 + i * 42, 0, 804 + i * 42, 504);
    }
}
for (var i = 1; i < 12; i++){
    line(0, i * 42, 504, i * 42);
    line(804, i * 42, 1308, i * 42);
}

var c = document.getElementById("myBoard");
var ctx = c.getContext("2d");
var img = document.getElementById("leftGun");
var imgTwo = document.getElementById("rightGun");
ctx.drawImage(img, 510, 300, 143, 130);
ctx.drawImage(imgTwo, 655, 300, 143, 130);

