funtion transform(){
    //データ数を1000とする。
    var number = 1000;
    //乱数を生成
    var rand = Math.floor( Math.random() * number );
    //localStorageからsfen文字列を取得する。
    var sfen = localStorage.getItem(rand);
    //sfen文字列を日本語に変換する。
    var data = sfen.split("/");
    //列ごとの情報に変換
    for(var i = 0; i < 9; i++){
        var j = 0;
        while(j < 9){
            var param = data[i].charAt[j];
            //セットする升目
            var masume = i * 9 + j + 1;
            // paramが数字でない場合
            if(isNaN(param)){
                switch(param){
                //駒を設定する。
                case K:
                case k:
                document.getElementById('masu' + masume).textContent = '玉';
                break;

                case R:
                case r:
                document.getElementById('masu' + masume).textContent = '飛';
                break;

                case B:
                case b:
                document.getElementById('masu' + masume).textContent = '角';
                break;

                case G:
                case g:
                document.getElementById('masu' + masume).textContent = '金';
                break;

                case S:
                case s:
                document.getElementById('masu' + masume).textContent = '銀';
                break;

                case N:
                case n:
                document.getElementById('masu' + masume).textContent = '桂';
                break;

                case L:
                case l:
                document.getElementById('masu' + masume).textContent = '香';
                break;

                case P:
                case p:
                document.getElementById('masu' + masume).textContent = '歩';
                break;

                //後手の駒を反転させて表示させる
                case k:
                case r:
                case b:
                case g:
                case s:
                case n:
                case l:
                case p:
                document.getElementById('masu' + masume).webkitTransform = 'rotate(180deg)';
                break;

              }
              //paramが数字の場合
            }else{
              for(var k = 0; k < param; k++, j++){
                //空白マスの作成
                document.getElementById('masu' + masume).textContent = '　';
              }
            }
          }
      }
}
