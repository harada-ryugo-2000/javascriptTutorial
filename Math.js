function getEnsyu(r) {
    return 2*r*Math.PI;
}

function getMenseki(r) {
    return r*r*Math.PI;
}

console.log("円周 :" + getEnsyu(10) + "cm");
console.log("面積 :" + getMenseki(10) + "cm");

let myCard = [10,5,4];

function getMax(card) {
    let max = 0;
    for(let i = 0;i<card.length;i++){
        max = Math.max(max,card[i]);
    }
    return max;
}

console.log(getMax(myCard));

function getRansu(n){
    let ransu = Math.random() * (n+1); //n+1じゃないと99までの乱数範囲になってしまうため
    return Math.floor(ransu);
}
console.log(getRansu(100));