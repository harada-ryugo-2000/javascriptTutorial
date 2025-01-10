let file = "sample.jpg";
if(file.includes(".jpg",6)){
    console.log("this image format is jpg");
}

if(file.includes(".jpg")){
    console.log("this image format is jpg");
}

if(file.indexOf(".jpg",6) != -1){
    console.log("this image format is jpg");
}

if(file.indexOf(".jpg") != -1){
    console.log("this image format is jpg");
}

let endIndex = file.indexOf(".")
console.log(endIndex);
console.log(file.slice(0,endIndex));

let temp = file.split(".");
console.log(temp[0] + "array");