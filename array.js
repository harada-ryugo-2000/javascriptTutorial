let card = [4,10,5];
console.log(card.length);
if(card.includes(4)){
    console.log("4 is included");
}

console.log(card.indexOf(4));

card.push("K",7);

let endIndex = card.indexOf("K");
let newCard = card.slice(0,endIndex);

console.log(endIndex);

console.log(newCard);

let ymd = [2021,3,1];
console.log(ymd.join("/"));

card.pop();
console.log(card);
card.shift();
console.log(card);
card.unshift("ヒ");
console.log(card);