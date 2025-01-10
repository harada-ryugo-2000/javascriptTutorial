let win = 0,lose = 0,draw=0;

for(let i = 0;i<10;i++){
    let ransu = Math.random();
    if(ransu < 0.33){
        win++;
    }else if(ransu < 0.66) {
        lose++;
    }else {
        draw++;
    }

    if(win >= 5){
        console.log("FF!!");
        break;
    }
}
console.log(win + "win! " + lose + "lose " + draw + "draw");
