let key = false;
let memo = false;
let evidence = false;

function desk(){
  memo = true;
  document.getElementById("message").innerHTML=
    "メモを見つけた！「図書館に行け」";
  document.getElementById("itemMemo").innerHTML=
    "メモ:持っている";
}

function locker(){
  key = true;
  document.getElementById("message").innerHTML=
    "ロッカーから鍵を見つけて、手に入れた！";
   document.getElementById("itemKey").innerHTML=
    "鍵:持っている";
}

function board(){
  document.getElementById("message").innerHTML=
    "黒板には「本棚を探せ」と書かれている。";
}

function goLibrary(){
  if(key){
      location.href = "library.html";
  }else{
    alert("鍵が閉まってるみたい..教室を探索してみよう!");
  }
} 
function bookshelf(){
  evidence = true;
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
