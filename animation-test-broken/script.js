



const cube = document.getElementById("cube");


cube.addEventListener("click", loop);


var cubeX;
var cubeY;

cubeX = cube.offsetLeft;
cubeY = cube.offsetTop;

function moveCube(x, y) {
    cube.style.transform = "translateX(" + x / 10 + "px); translateY(" + y / 10 + "px)";
}

function loop() {

    cubeY = cubeY + 1;

    console.log(cubeX, cubeY);

    moveCube(cubeX, cubeY);

    //setTimeout(loop, 100);
}