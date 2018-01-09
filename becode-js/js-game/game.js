for (var i=0; i< 200; i++){
    document.getElementById("mainChessBoard").appendChild(document.createElement("div")).style.backgroundColor = parseInt((i / 10) + i) % 2 == 0 ? '#ababab' : 'white';    
}