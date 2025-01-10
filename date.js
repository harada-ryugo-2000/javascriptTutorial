let days = ["日","月","火","水","木","金","土"];
let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(days[now.getDay()] + "曜日");

console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());

now.setMonth(now.getMonth() + 6);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
