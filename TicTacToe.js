var ticTacToeBoard = [0,0,0,0,0,0,0,0,0];
var slotsLeft = [0,1,2,3,4,5,6,7,8];
var playerIsXs = false;
var gameStarted = false;
var yourTurn = false;
var playerPick = "a";

var userPromptBox = document.getElementById("userPromptBox");
var xbtn = document.getElementById("xbtn");
var obtn = document.getElementById("obtn");

function startGame(xOrO) {
  if (xOrO == 1) {
    playerIsXs = true;
    playerPick = "x";
  } else {
    playerIsXs = false;
    playerPick = "o";
  }
  xbtn.style.visibility = "hidden";
  obtn.style.visibility = "hidden";
  yourTurn = true;
  userPromptBox.innerHTML = "Your move";
  gameStarted = true;
}

function checkForWinner() {
  if (checkForThreeInARow() == 1 && playerPick == "x" || checkForThreeInARow() == 2 && playerPick == "o") {
    userPromptBox.innerHTML = "You win!";
    gameStarted = false;
    setTimeout(resetGame, 1000);
  } else if (checkForThreeInARow(checkForThreeInARow() == 1 && playerPick == "o" || checkForThreeInARow() == 2 && playerPick == "x")) {
    userPromptBox.innerHTML = "The computer wins!";
    gameStarted = false;
    setTimeout(resetGame, 1000);
  } else if (checkForTie()) {
    userPromptBox.innerHTML = "Tie game!";
    gameStarted = false;
    setTimeout(resetGame, 1000);
  }
}

function checkForThreeInARow() {
  if (checkThree(1, 0, 1, 2)) {
    return 1;
  } else if (checkThree(2, 0, 1, 2)) {
    return 2;
  } else if (checkThree(1, 3, 4, 5)) {
    return 1;
  } else if (checkThree(2, 3, 4, 5)) {
    return 2;
  } else if (checkThree(1, 6, 7, 8)) {
    return 1;
  } else if (checkThree(2, 6, 7, 8)) {
    return 2;
  } else if (checkThree(1, 0, 3, 6)) {
    return 1;
  } else if (checkThree(2, 0, 3, 6)) {
    return 2;
  } else if (checkThree(1, 1, 4, 7)) {
    return 1;
  } else if (checkThree(2, 1, 4, 7)) {
    return 2;
  } else if (checkThree(1, 2, 5, 8)) {
    return 1;
  } else if (checkThree(2, 2, 5, 8)) {
    return 2;
  } else if (checkThree(1, 0, 4, 8)) {
    return 1;
  } else if (checkThree(2, 0, 4, 8)) {
    return 2;
  } else if (checkThree(1, 2, 4, 6)) {
    return 1;
  } else if (checkThree(2, 2, 4, 6)) {
    return 2;
  } else {
    return 0;
  }
}

function checkThree(xOrO, slot1, slot2, slot3) {
  if (ticTacToeBoard[slot1] == xOrO && ticTacToeBoard[slot2] == xOrO && ticTacToeBoard[slot3] == xOrO) {
    return true;
  }
  return false;
}

function placeXorO(slot) {
  if (gameStarted) {
    blockOnCLicks();
    if (ticTacToeBoard[slot] == 0) {
      if (playerIsXs) {
        ticTacToeBoard[slot] = 1;
        spliceSlotWithNum(slot);
        console.log(slotsLeft);
        switch(slot) {
          case 0:
            document.getElementById("x1-tl").style.visibility = "visible";
            document.getElementById("x2-tl").style.visibility = "visible";
            break;
          case 1:
            document.getElementById("x1-tm").style.visibility = "visible";
            document.getElementById("x2-tm").style.visibility = "visible";
            break;
          case 2:
            document.getElementById("x1-tr").style.visibility = "visible";
            document.getElementById("x2-tr").style.visibility = "visible";
            break;
          case 3:
            document.getElementById("x1-ml").style.visibility = "visible";
            document.getElementById("x2-ml").style.visibility = "visible";
            break;
          case 4:
            document.getElementById("x1-mm").style.visibility = "visible";
            document.getElementById("x2-mm").style.visibility = "visible";
            break;
          case 5:
            document.getElementById("x1-mr").style.visibility = "visible";
            document.getElementById("x2-mr").style.visibility = "visible";
            break;
          case 6:
            document.getElementById("x1-bl").style.visibility = "visible";
            document.getElementById("x2-bl").style.visibility = "visible";
            break;
          case 7:
            document.getElementById("x1-bm").style.visibility = "visible";
            document.getElementById("x2-bm").style.visibility = "visible";
            break;
          case 8:
            document.getElementById("x1-br").style.visibility = "visible";
            document.getElementById("x2-br").style.visibility = "visible";
        }
        checkForWinner();
        if(gameStarted) {
          if (yourTurn) {
            yourTurn = false;
            computerMove();
          } else {
            toggleXsOrOs();
            yourTurn = true;
            userPromptBox.innerHTML = "Your move";
          }
        }
      } else {
        ticTacToeBoard[slot] = 2;
        spliceSlotWithNum(slot);
        console.log(slotsLeft);
        switch(slot) {
          case 0:
            document.getElementById("circle-tl").style.visibility = "visible";
            break;
          case 1:
            document.getElementById("circle-tm").style.visibility = "visible";
            break;
          case 2:
            document.getElementById("circle-tr").style.visibility = "visible";
            break;
          case 3:
            document.getElementById("circle-ml").style.visibility = "visible";
            break;
          case 4:
            document.getElementById("circle-mm").style.visibility = "visible";
            break;
          case 5:
            document.getElementById("circle-mr").style.visibility = "visible";
            break;
          case 6:
            document.getElementById("circle-bl").style.visibility = "visible";
            break;
          case 7:
            document.getElementById("circle-bm").style.visibility = "visible";
            break;
          case 8:
            document.getElementById("circle-br").style.visibility = "visible";
        }
        checkForWinner();
        if(gameStarted) {
          if (yourTurn) {
            yourTurn = false;
            computerMove();
          } else {
            toggleXsOrOs();
            yourTurn = true;
            userPromptBox.innerHTML = "Your move";
          }
        }
      }
    }
  }
  enableOnCLicks();
}

function computerMove() {
  toggleXsOrOs();
  userPromptBox.innerHTML = "Computer's move";
  setTimeout(computerMoveAfterWait, 1000);
}

function computerMoveAfterWait() {
  placeXorO(slotsLeft[Math.floor((Math.random() * slotsLeft.length))]);
}

function toggleXsOrOs() {
  if (playerIsXs) {
    playerIsXs = false;
  } else {
    playerIsXs = true;
  }
}

function spliceSlotWithNum(num) {
  var index;
  for (i = 0; i < slotsLeft.length; i++) {
    if (slotsLeft[i] == num) {
      index = i;
    }
  }
  slotsLeft.splice(index, 1);
}

function resetGame() {
  ticTacToeBoard = [0,0,0,0,0,0,0,0,0];
  slotsLeft = [0,1,2,3,4,5,6,7,8];
  gameStarted = false;
  yourTurn = false;
  playerPick = "a";
  xbtn.style.visibility = "visible";
  obtn.style.visibility = "visible";
  userPromptBox.innerHTML = "Would you like to play Xs or Os?";
  document.getElementById("x1-tl").style.visibility = "hidden";
  document.getElementById("x2-tl").style.visibility = "hidden";
  document.getElementById("x1-tm").style.visibility = "hidden";
  document.getElementById("x2-tm").style.visibility = "hidden";
  document.getElementById("x1-tr").style.visibility = "hidden";
  document.getElementById("x2-tr").style.visibility = "hidden";
  document.getElementById("x1-ml").style.visibility = "hidden";
  document.getElementById("x2-ml").style.visibility = "hidden";
  document.getElementById("x1-mm").style.visibility = "hidden";
  document.getElementById("x2-mm").style.visibility = "hidden";
  document.getElementById("x1-mr").style.visibility = "hidden";
  document.getElementById("x2-mr").style.visibility = "hidden";
  document.getElementById("x1-bl").style.visibility = "hidden";
  document.getElementById("x2-bl").style.visibility = "hidden";
  document.getElementById("x1-bm").style.visibility = "hidden";
  document.getElementById("x2-bm").style.visibility = "hidden";
  document.getElementById("x1-br").style.visibility = "hidden";
  document.getElementById("x2-br").style.visibility = "hidden";
  document.getElementById("circle-tl").style.visibility = "hidden";
  document.getElementById("circle-tm").style.visibility = "hidden";
  document.getElementById("circle-tr").style.visibility = "hidden";
  document.getElementById("circle-ml").style.visibility = "hidden";
  document.getElementById("circle-mm").style.visibility = "hidden";
  document.getElementById("circle-mr").style.visibility = "hidden";
  document.getElementById("circle-bl").style.visibility = "hidden";
  document.getElementById("circle-bm").style.visibility = "hidden";
  document.getElementById("circle-br").style.visibility = "hidden";
}
  
function checkForTie() {
  for (i = 0; i < 9; i++) {
    if (ticTacToeBoard[i] == 0) {
      return false;
    }
  }
  return true;
}

function blockOnCLicks() {
  document.getElementById("tl").onclick = null;
  document.getElementById("tm").onclick = null;
  document.getElementById("tr").onclick = null;
  document.getElementById("ml").onclick = null;
  document.getElementById("mm").onclick = null;
  document.getElementById("mr").onclick = null;
  document.getElementById("bl").onclick = null;
  document.getElementById("bm").onclick = null;
  document.getElementById("br").onclick = null;
}

function enableOnCLicks() {
  document.getElementById("tl").onclick = function() {placeXorO(0)};
  document.getElementById("tm").onclick = function() {placeXorO(1)};
  document.getElementById("tr").onclick = function() {placeXorO(2)};
  document.getElementById("ml").onclick = function() {placeXorO(3)};
  document.getElementById("mm").onclick = function() {placeXorO(4)};
  document.getElementById("mr").onclick = function() {placeXorO(5)};
  document.getElementById("bl").onclick = function() {placeXorO(6)};
  document.getElementById("bm").onclick = function() {placeXorO(7)};
  document.getElementById("br").onclick = function() {placeXorO(8)};
}