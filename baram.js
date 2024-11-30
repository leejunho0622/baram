window.addEventListener("keydown", (e) => {
    const player = document.getElementById("player");
    const playerImg = document.querySelector("#player img");
    const playerInfo = player.getBoundingClientRect();
    
    if(e.key === 'w' && playerInfo.top >= 0){
        playerImg.src = "https://github.com/leejunho0622/baram/blob/develop/baram/pb_3x2.png?raw=true";
        moveTop = playerInfo.top - 50;
        player.style.top = moveTop + "px";
    }
    else if(e.key === 'a' && playerInfo.left >= 0){
        playerImg.src = "https://github.com/leejunho0622/baram/blob/develop/baram/pl_3x2.png?raw=true";
        moveLeft = playerInfo.left - 50;
        player.style.left = moveLeft + "px";
    }
    else if(e.key === 's' && playerInfo.top <= 550){
        playerImg.src = "https://github.com/leejunho0622/baram/blob/develop/baram/pf_3x2.png?raw=true";
        moveRight = playerInfo.top + 50;
        player.style.top = moveRight + "px";
    }
    else if(e.key === 'd' && playerInfo.left <= 600){
        playerImg.src = "https://github.com/leejunho0622/baram/blob/develop/baram/pr_3x2.png?raw=true";
        moveRight = playerInfo.left + 50;
        player.style.left = moveRight + "px";
    }
});  