score = 0;
cross = true;
audio = new Audio('assets/music.mp3');
audiogo = new Audio('assets/gameover.mp3');
setTimeout(() => {
    audio.play()
},1000);
document.onkeydown = function(e){
    console.log("key code is: ", e.keyCode)
    if(e.keyCode==38){
        Jerry = document.querySelector('.Jerry');
        Jerry.classList.add('animateJerry');
        setTimeout(()=>{
            Jerry.classList.remove('animateJerry')
        }, 700);
    }
    if(e.keyCode==39){
        Jerry = document.querySelector('.Jerry');
        JerryX = parseInt(window.getComputedStyle(Jerry, null).getPropertyValue('left'));
        Jerry.style.left = JerryX + 150 + "px";
    }
    if(e.keyCode==37){
        Jerry = document.querySelector('.Jerry');
        JerryX = parseInt(window.getComputedStyle(Jerry, null).getPropertyValue('left'));
        Jerry.style.left = (JerryX - 150) + "px";
    }
}

setInterval(()=>{
    Jerry = document.querySelector('.Jerry');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    jx = parseInt(window.getComputedStyle(Jerry, null).getPropertyValue('left'));
    jy = parseInt(window.getComputedStyle(Jerry, null).getPropertyValue('top'));
    tx = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    ty = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(jx-tx);
    offsetY = Math.abs(jy-ty);
    // console.log(offsetX, offsetY)
    if(offsetX< 75 && offsetY< 100){
        gameOver.innerHTML = "GAME OVER (Reload to try again)"
        obstacle.classList.remove("obstacleAnimate")
        audiogo.play();
        setTimeout(() => {
            audio.pause();
            audiogo.pause();
        }, 1000);
    }else if(offsetX < 100 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(()=>{
            AnimationDuration = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('Animation-Duration'));
            NewDuration = AnimationDuration - 0.1;
            obstacle.style.AnimationDuration = NewDuration + 's';
        }, 500);
    }
},10);
function updateScore(score){
    scoreCount.innerHTML = "Your Score: "+score;
}
