// Pilihan COM
// mengembalikan pilihan computer berupa string "batu", "gunting", atau "kertas"
function pilihanCom() {
    const pil = Math.floor(Math.random() * 3);
    if (pil==0) {
        return "batu";
    } else if (pil==1) {
        return "kertas";
    } else { // pil==2
        return "gunting";
    }
}

// logic rock paper scissors
// mengembalikan pemenang dalam string, apabila drawa mengembalikan "draw"
function rockPaperScissors(pilPlayer, pilCom) {
    if (pilPlayer == pilCom) {
        return "draw";
    }

    if (pilPlayer == "batu") {
        if (pilCom == "kertas") {
            return "com";
        } else { // pilCom == "gunting"
            return "player";
        }
    } else if (pilPlayer == "kertas") {
        if (pilCom == "gunting") {
            return "com";
        } else { // pilCom == "batu"
            return "player";
        }
    } else { // pilPlayer == "gunting"
        if (pilCom == "batu") {
            return "com";
        } else { // pilCom == "kertas"
            return "player";
        }
    }
}

// parameter hasil adalah return value dari function rockPaperScissors
// resultBox dan resultName adalah variabel global
// I.S = ditengah2 tertulis VS
// F.S = ditengah2 tertulsi siapa pemenangnya atau draw
function showHasil(hasil) { // procedure
    resultBox.style.removeProperty("visibility");
    if (hasil=="draw") {
        resultName.innerText = "DRAW";
    } else if (hasil=="com") {
        resultName.innerText = "COM\nWIN";
    } else { //hasil=="player"
        resultName.innerText = "PLAYER 1\nWIN";
    }
}

const resultBox = document.getElementById("result-div");
const resultName = document.getElementById("result-p");

resultBox.style.visibility = "hidden";
showHasil("player");