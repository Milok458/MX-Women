function setSquares(){
    let box = document.getElementById("box");

    let originalDate = new Date();

    originalDate.setFullYear(2022, 4, 8);

    let today = new Date();

    let differenceInTime = today.getTime() - originalDate.getTime();

    let differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    for(let i=0; i<(differenceInDays*10); i++){
        box.innerHTML += '<div class="square"></div>';
    }
}

setSquares();