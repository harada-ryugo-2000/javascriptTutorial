function aisatsu(message){
    console.log(message);
}
aisatsu("aaa");
aisatsu("bbb");
aisatsu("ccc");

// function addition(a,b) {
//     let total = a + b;
//     console.log(total);
// }
// addition(10,11);
// addition(-1,11);

function sumCard(card) {
    let total = 0;
    for(let i = 0; i<card.length; i++){
        total += card[i];
    }
    console.log(total);
}

let myCard = [1,2,3,4];
sumCard(myCard);

function addition(a,b) {
    let c = a + b;
    return c;
}

let total = addition(10,11);
console.log("total" + total);

const aisatsu2 = function() {
    console.log("aisatu");
}
aisatsu2();