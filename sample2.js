let input = 1000;
const price = 920;

if(input > price) { 
    console.log(input - price);
} else if(input == price){
    console.log("just");
} else {
    console.log("less");
}

switch(input) {
    case 920:
        console.log("just");
        break;
    case 1000:
        console.log(input - price);
        break;
    default:
        console.log("less");
        break;
}