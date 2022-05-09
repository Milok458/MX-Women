function setSquares(){
    let box = document.getElementById("box");

    let originalDate = new Date();

    originalDate.setFullYear(2022, 4, 8);

    let today = new Date();

    let differenceInTime = today.getTime() - originalDate.getTime();

    let calculatedBoxes = Math.floor(differenceInTime / (1000 * 3600 * 2.5));

    for(let i=0; i<(calculatedBoxes); i++){
        box.innerHTML += '<div class="square"></div>';
    }
}

setSquares();