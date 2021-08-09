// Deklarasi DOM
const resultBox = document.getElementById("result-div");
const resultName = document.getElementById("result-p");
const playerBatu = document.getElementById("player-batu");
const playerKertas = document.getElementById("player-kertas");
const playerGunting = document.getElementById("player-gunting");
const comBatu = document.getElementById("com-batu");
const comKertas = document.getElementById("com-kertas");
const comGunting = document.getElementById("com-gunting");

// Pilihan COM
// mengembalikan pilihan computer berupa string "batu", "gunting", atau "kertas"
function pilihanCom() {
    const pil = Math.floor(Math.random() * 3);
    if (pil==0) {
        comBatu.style.backgroundColor = "#C4C4C4";
        return "batu";
    } else if (pil==1) {
        comKertas.style.backgroundColor = "#C4C4C4";
        return "kertas";
    } else { // pil==2
        comGunting.style.backgroundColor = "#C4C4C4";
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

// MAIN
resultBox.style.visibility = "hidden";

// ----------- ====== onclick function ====== ----------


// resultBox, (player/com)(Batu/Gunting/Kertas) adalah variabel global
// I.S = apapun
// F.S = ditengah2 tertulsi VS, semua highlight ilang
function reset() {
    resultBox.style.visibility = "hidden";
    playerBatu.style.removeProperty("background-color");
    playerKertas.style.removeProperty("background-color");
    playerGunting.style.removeProperty("background-color");
    comBatu.style.removeProperty("background-color");
    comKertas.style.removeProperty("background-color");
    comGunting.style.removeProperty("background-color");
}

function chooseBatu() {
    reset();
    playerBatu.style.backgroundColor = "#C4C4C4";
    let player = "batu"
    console.log("Pilihan Player 1 = " + player);
    com = pilihanCom();
    console.log("Pilihan Computer = " + com);
    result = rockPaperScissors(player, com);
    showHasil(result);
}