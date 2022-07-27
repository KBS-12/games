let character = document.getElementById("character");
let block = document.getElementById("block");
let score = document.getElementById("score");
let i = 0

function jump(){
    if (character.classList.contains("animate")){return}
   // if(character.classList != "animate"){
        character.classList.add("animate");

    setTimeout(() => {
        character.classList.remove("animate");
    },500);
}

let checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    console.log(blockLeft)
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        location.reload(true)
    }else if (blockLeft===(-7)) {
        i +=1
        score.textContent = "Score: " + i
    }
    },10);

