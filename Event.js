function showMessage() {
    alert("ハンドラが起動しました");
}
let e = document.querySelector("#btn");
e.addEventListener("click",showMessage);

let card = [10,20,30];
console.log(card.reduce(function(sum, element){
    return sum + element;
  }, 0));

  document.addEventListener('keydown', function(event) {
    // Ctrlキーが押されていて、かつ"C"キーが押された場合
    if (event.ctrlKey && (event.key === 'c' || event.key === 'C' || event.key === 'ｃ')) {
        event.preventDefault(); // デフォルトの操作を無効化
        console.log('Ctrl + C が無効化されました');
    }
});
  