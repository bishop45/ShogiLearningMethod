//盤面を形成する。
function createboard(){
  var board = '<tr>';
  for (i = 1 ; i <= 81 ; i++){
    board += '<td id="masu" + i + "></td>"';
    if(i % 9 == 0){
      board += '</tr><tr>';
    }
  }
  document.getElementById('board').textContent = board;
  document.getElementById('board').style.borderStyle = 'solid';
}
