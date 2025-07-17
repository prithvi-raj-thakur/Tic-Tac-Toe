let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("newbtn");
let messagecont = document.querySelector("message");
let msg = document.querySelector("#msg");


let turn0 = true;

const winpat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=> {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false ;
        }
        else{
            box.innerText = "X";
            turn0 = true ;
        }
        box.disabled = true;

        check();
    });
});

const disable= ()=>{
    for(let box in boxes){
        box.disabled = true ;
    }
}

const enable= ()=>{
    for(let box in boxes){
        box.disabled = false ;
        box.innerText="";
    }
}


const displayWinner = (Winner)=>{
    msg.innerText=`Congrulations , Winner is ${Winner}`;
    messagecont.classList.remove("hide");
    disable();
}

const check = () => {
    for(let pattern of winpat){
        let position1= boxes[pattern[0]].innerText;
        let position2= boxes[pattern[1]].innerText;
        let position3= boxes[pattern[2]].innerText;

        if(position1!="" && position2!="" && position3!=""){
            if(position1 == position2 && position2== position3){
                console.log("Winner",position1);
                displayWinner();
            }
        }
    }
}

const resetGame = ()=>{
    turn0 = true;
    enable();
    messagecont.classList.add("hide");
}