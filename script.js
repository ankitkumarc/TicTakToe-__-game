let turn = "X";
let isWin = false;
// let music = new Audio();
// let move = new Audio();
// let gameover = new Audio();

// function to change turn
const changeTurn = () => {
    return turn === "X"?"0":"X";
}

//function to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
         if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!==""))
        { isWin = true;
         document.querySelector('.turnInfo').innerText = "Congratulations!! " + boxtext[e[0]].innerText + " Won";
         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext'); 
    element.addEventListener('click', () => {
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            turn = changeTurn();
            checkWin();
            if(!isWin)
            document.getElementsByClassName("turnInfo")[0].innerText = turn + "`s Turn";
            
        }
    })
})

//adding listener to reset button
reset.addEventListener('click',() => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach((e) => {
        e.innerText = "";
    })
    // turn = "X";
    isWin = false;
    document.querySelector('.turnInfo').innerText = turn + "`s Turn";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})




