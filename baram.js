window.addEventListener("keydown", (e) => {
    const player = document.getElementById("player");
    const playerInfo = player.getBoundingClientRect();

    if(e.key === 'w' && playerInfo.top >= 0){
        moveTop = playerInfo.top - 50;
        player.style.top = moveTop + "px";
    }
    else if(e.key === 'a' && playerInfo.left >= 0){
        moveLeft = playerInfo.left - 50;
        player.style.left = moveLeft + "px";
    }
    else if(e.key === 's' && playerInfo.top <= 550){
        moveRight = playerInfo.top + 50;
        player.style.top = moveRight + "px";
    }
    else if(e.key === 'd' && playerInfo.left <= 600){
        moveRight = playerInfo.left + 50;
        player.style.left = moveRight + "px";
    }

});  