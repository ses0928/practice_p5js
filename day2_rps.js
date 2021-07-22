/*  0 ~ 100 integer print file
let mybutton = document.getElementById("myButton");
let myp = document.getElementById("answer");

mybutton.addEventListener("click",newFunc);
function newFunc(){
    i = Math.round(100*Math.random());
    myp.innerText = i;
}
*/

let Rock = document.getElementById("Rock");
let Paper = document.getElementById("Paper");
let Scissors = document.getElementById("Scissors");
let result = document.getElementById("result");
let prob = 0.333;
let win_count = 0;
let draw_count = 0;
let lose_count = 0;

let hand_table = [];
let winlose_table = [];
let prob_table = [];

// background color change
Rock.addEventListener("mousedown",rock_func);
Paper.addEventListener("mousedown",paper_func);
Scissors.addEventListener("mousedown",scissors_func);

function rock_func(){
    Rock.style.backgroundColor = "green";
}

function paper_func(){
    Paper.style.backgroundColor = "yellow";
}

function scissors_func(){
    Scissors.style.backgroundColor = "red";
}

// background color reset
Rock.addEventListener("mouseup",bgc_reset);
Paper.addEventListener("mouseup",bgc_reset);
Scissors.addEventListener("mouseup",bgc_reset);

function bgc_reset(){
    Rock.style.backgroundColor = "";
    Paper.style.backgroundColor = "";
    Scissors.style.backgroundColor = "";
}

// rock paper scissors !
Rock.addEventListener("click",rps_func);
Paper.addEventListener("click",rps_func);
Scissors.addEventListener("click",rps_func);

function rps_func(){
    var c = Math.random();
    prob_table.push(prob);
    hand_table.push(this.innerText);
    
    if (prob>c){
        prob -= 0.05;
        win_count +=1;
        winlose_table.push("win");
        result.innerText="win";
    } else {
        if(c<0.5){
            draw_count +=1;
            winlose_table.push("draw");
            result.innerText="draw";
        } else{
            lose_count +=1;
            prob +=0.05;
            winlose_table.push("lose");
            result.innerText="lose";
        }
    }

    if (win_count+draw_count+lose_count===10){
        result.innerText="";
        for (var i=0;i<10;i++){
            result.innerText += (hand_table[i] + " " + winlose_table[i] + " " + prob_table[i].toFixed(3));
            result.innerText += String.fromCharCode(13);
        }  
    }
}

