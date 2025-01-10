/***********************************************
  グローバル変数
************************************************/
//カードの山：配列
//自分のカード：配列
//相手のカード：配列
//勝敗決定フラグ：論理型

/***********************************************
  イベントハンドラの割り当て
************************************************/
window.addEventListener("load",initDisplay());

document.querySelector("#pick").addEventListener("click",drawCard());

document.querySelector("#judge").addEventListener("click",pickCard());

document.querySelector("#reset").addEventListener("click",reMatch());

/***********************************************
  イベントハンドラ
************************************************/
function initDisplay(){

}

function shuffle() {
  for (let i = 0; i<100 ; i++) {
    
  }
}

function pickCard() {

}

function judge() {

}

function reMatch(){

}

function opponentPickCard(cards){
  if(cards.length < 5){
    if(thinking(cards.reduce())){

    }
  }
}

function thinking(){

}
/***********************************************
  ゲーム関数
************************************************/

/***********************************************
  デバッグ関数
************************************************/
