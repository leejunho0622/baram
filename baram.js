window.addEventListener("keydown", (e) => {
    const player = document.getElementById("player");
    const playerImg = document.querySelector("#player img");
    const playerInfo = player.getBoundingClientRect();
    
    if(e.key === 'w' && playerInfo.top >= 0 && !collisionDetection(playerInfo, "up")){
        playerImg.src = "https://github.com/leejunho0622/baram/blob/develop/baram/pb_3x2.png?raw=true";
        moveUp = playerInfo.top - 50;
        player.style.top = moveUp + "px";
    }
    else if(e.key === 'a' && playerInfo.left >= 0 && !collisionDetection(playerInfo, "left")){
        playerImg.src = "https://github.com/leejunho0622/baram/blob/develop/baram/pl_3x2.png?raw=true";
        moveLeft = playerInfo.left - 50;
        player.style.left = moveLeft + "px";
    }
    else if(e.key === 's' && playerInfo.top <= 550 && !collisionDetection(playerInfo, "down")){
        playerImg.src = "https://github.com/leejunho0622/baram/blob/develop/baram/pf_3x2.png?raw=true";
        moveDown = playerInfo.top + 50;
        player.style.top = moveDown + "px";
    }
    else if(e.key === 'd' && playerInfo.left <= 600 && !collisionDetection(playerInfo, "right")){
        playerImg.src = "https://github.com/leejunho0622/baram/blob/develop/baram/pr_3x2.png?raw=true";
        moveRight = playerInfo.left + 50;
        player.style.left = moveRight + "px";
    }
});  

function collisionDetection(px, direction) {
    entity = ["mantis", "scorpion", "rabbit", "npc1", "npc2"];
    if(direction === "up"){
        for(let i=0; i<entity.length; i++){
            const entityXY = document.getElementById(entity[i]).getBoundingClientRect();
            if((px.top - 50 >= entityXY.top && px.top - 50 <= entityXY.top) && (px.left >= entityXY.left && px.left < entityXY.left + 50)){
                return true;
            }
        }
    }
    else if(direction == "left"){
        for(let i=0; i<entity.length; i++){
            const entityXY = document.getElementById(entity[i]).getBoundingClientRect();
            if(px.top === entityXY.top && px.left - 50 === entityXY.left){
                return true;
            }
        }
    }
    else if(direction == "down"){
        for(let i=0; i<entity.length; i++){
            const entityXY = document.getElementById(entity[i]).getBoundingClientRect();
            if((px.top + 50 >= entityXY.top && px.top + 50 <= entityXY.top) && (px.left >= entityXY.left && px.left < entityXY.left + 50)){
                return true;
            }
        }
    }
    else if(direction == "right"){
        for(let i=0; i<entity.length; i++){
            const entityXY = document.getElementById(entity[i]).getBoundingClientRect();
            if(px.top === entityXY.top && px.left + 50 === entityXY.left){
                return true;
            }
        }
    }
    return false;
}