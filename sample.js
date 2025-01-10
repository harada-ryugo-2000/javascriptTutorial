let meibo = {
    20224:"新井太郎",
    20031:"井上次郎",
    20193:"山本花子"
};
console.log(meibo);
console.log(meibo["20031"]);
meibo["20031"] = "井上更新";
console.log(meibo["20031"]);

let meibo2 = [
    {id:"20224",name:"新井太郎",tokui_kamoku:"english"},
    {id:"20031",name:"井上次郎"},
    {id:"20193",name:"山本花子"}
];
console.log(meibo2[0]["id"] + ":" + meibo2[0]["name"]);
meibo2[0]["name"] = "更新太郎";
console.log(meibo2[0]["id"] + ":" + meibo2[0]["name"]);
console.log(meibo2[0]["tokui_kamoku"]);