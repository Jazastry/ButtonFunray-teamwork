var canvas = document.getElementById("myBoard"),
    canvasLeft = canvas.offsetLeft,
    canvasTop = canvas.offsetTop,
    context = canvas.getContext("2d"),
    fields = [];

canvas.addEventListener('click', function() {
    var x = event.pageX - canvasLeft,
        y = event.pageY - canvasTop;

    fields.forEach(function(field){
        if (y > field.top && y < field.top + field.height && x > field.left && x < field.left + field.width){
            alert("I am field #" + field.id);
        }
    });
}, false);


for (var i = 0; i < 12; i++){
        fields.push({
            id: 12 * i,
            colour: "#FF0000",
            width: 41,
            height: 41,
            top: i * 42.1,
            left: 0
        });
    for (var j = 1; j < 12; j++){
        fields.push({
            id: 12 * i + j,
            width: 41,
            height: 41,
            top: i * 42.1,
            left: j * 42
        });
    }
}

for (var i = 0; i < 12; i++){
    fields.push({
        id: 144 + i * 12,
        colour: "#FF0000",
        width: 41,
        height: 41,
        top: i * 42.1,
        left: 805
    });
    for (var j = 1; j < 12; j++){
        fields.push({
            id: 144 + i * 12 + j,
            width: 41,
            height: 41,
            top: i * 42.1,
            left: 805 + j * 42
        });
    }
}
//fields.push({
//    colour: "#FF0000",
//    width: 41,
//    height: 41,
//    top: 0,
//    left: 0
//});
fields.forEach(function(field){
    context.fillStyle = field.colour;
    context.fillRect(field.left, field.top, field.width, field.height);
});
