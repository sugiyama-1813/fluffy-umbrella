let key = false;
let memo = false;

function desk(){
  document.getElementById("message").innerHTML=
    "メモを見つけた！「図書館を調べろ」";
}

function locker(){
  key = true;
  document.getElementById("message").innerHTML=
    "ロッカーから鍵を見つけて、手に入れた！";
}

function board(){
  document.getElementById("message").innerHTML=
    "黒板には「本棚を探せ」と書かれている。";
}

function goLibrary(){
  if(key){
      location.href = "library.html";
  }else{
    alert("先にロッカーを調べて鍵をゲットしよう!");
  }
} 
function bookshelf(){
  document.getElementById("message").innerHTML=
    "本の間から証拠を見つけた！";
}

function computer(){
  document.getElementById("message").innerHTML=
    "防犯カメラには生徒の姿が映っていた！";
}

function librarian(){
  document.getElementById("message").innerHTML=
    "司書さん「今日は一人の生徒が慌てていました。」";
}
