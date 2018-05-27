window.onload = function(){
    
    var sq = document.getElementsByClassName("square");
    
    
    var squareCount = parseInt(Math.random() * 21) + 30;
    for (var i = 0; i < squareCount; i++){
        addSquare();
    };
    rmSquare();
       
    var colors = document.getElementById("colors")
    colors.onclick = function(){
         changeColor();
    };

  
    var add = document.getElementById("add");
    add.onclick = function(){
        addSquare();
        rmSquare();   
    };
    
   
    function rmSquare(){
        sq = document.getElementsByClassName("square");
        for (var i = 0; i < sq.length; i++) {
            sq[i].onclick = function(e){
                var zi = this.style.zIndex;
                if(zi == 999){
                    this.remove();
                };
                this.style.zIndex = "999";
            };
        };
    };
    


    function changeColor(){
        var squares = document.querySelectorAll("#square-area div");
        for (var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = getRandomColor(); 
        };
    };

    
    function addSquare(){
        var square = document.createElement("div");
        square.className = "square";
        square.style.left = parseInt(Math.random() * 650) + "px";
        square.style.top = parseInt(Math.random() * 550) + "px";
        square.style.backgroundColor = getRandomColor();
        var squareArea = document.getElementById("square-area");
        squareArea.appendChild(square);
    };

    
    function getRandomColor(){
        var letters = "0123456789abcdef";
        var result = "#";
        for (var i = 0; i < 6; i++){
            result += letters.charAt(parseInt(Math.random() * letters.length))
        };
        return result;
    };

};