
const player1 = {
    score : 0,
    button : document.querySelector("#player1btn"),
    display : document.querySelector("#player1Score"),

}


const player2 = {
    score : 0,
    button : document.querySelector("#player2btn"),
    display : document.querySelector("#player2Score")

}




const resetbtn = document.querySelector("#reset");
const selectVal = document.querySelector("#selectDrop");



let target = 3;
let isAnyWin = false;


const p1btn = document.querySelector("#player1btn");
const p2btn = document.querySelector("#player2btn");






selectVal.addEventListener("change" , function(event){  // change  vs input   i.e a liitle // change -> shows output , when clicked out of input box   ,,  input : output changed as the input the changed acc
    
    console.log("Target : " + this.value);
    target = this.value;  // whatever u select from dropdown

    Reset();

});



function updateScore(player , opponent){
    
    if(player.score != target && isAnyWin == false){
        player.score++;
        player.display.innerHTML = player.score;
    }

    if(player.score == target){
        isAnyWin = true;

        
        player.display.classList.add("has-text-success");
        opponent.display.classList.add("has-text-danger");

            player.button.disabled = true;
            opponent.button.disabled = true;

    }
}





p1btn.addEventListener("click" , function(){
    updateScore(player1 , player2);

})




p2btn.addEventListener("click" , function(){

    updateScore(player2 , player1);
  
})







resetbtn.addEventListener("click" , function(){
    
    Reset();

    
    console.log("On clicking reset , select dropdown value changed to default value ");
    selectVal.value = 3;  // changing the dropdown to default value;

})







function funcReset(player){

        player.score=0;
        player.display.innerHTML = player.score;
        player.display.classList.remove("has-text-success");
        player.display.classList.remove("has-text-danger");
        player.button.disabled = false;

}


function Reset(){

    funcReset(player1);
    funcReset(player2);
    
    isAnyWin = false;  // making again false;

}