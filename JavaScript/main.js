var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
var cardsInPlay = [];

function checkForMatch(){   
    if (cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]){
            alert("You found a match!");
            setTimeout(function(){
                var gameBoard = document.getElementById("game-board");
                while (gameBoard.hasChildNodes()) {
                    gameBoard.removeChild(gameBoard.lastChild);
                }
                cardsInPlay = [];
                createBoard();
            }, 2000);
        }
        else{
            alert("Sorry, try again.");
            setTimeout(function(){
                var imgs = document.getElementsByTagName("img");
                for (var i = 0; i<imgs.length;i++){
                    imgs[i].setAttribute('src','images/back.png');
                    imgs[i].setAttribute('flipped','false');
            }
                cardsInPlay = [];  
            },2000);
        }
    }  
}

var flipCard = function(){  
    if (this.getAttribute('flipped') === 'false'){
        var cardId = this.getAttribute('data-id');
        cardsInPlay.push(cards[cardId].rank);
        this.setAttribute('src',cards[cardId].cardImage);
        this.setAttribute('flipped',true);
        checkForMatch();
    }
}

function createBoard(){
    var array = [0,1,2,3];
    var cardOrder = [];
    for (var i = 0; i<cards.length; i++){
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.setAttribute('flipped','false');
        cardElement.addEventListener('click', flipCard);
        var orderNumber = array[Math.floor(Math.random() * array.length)];
        var index = array.indexOf(orderNumber);
        array.splice(index,1);
        cardOrder[orderNumber] = cardElement;
    } 
    for (var j=0;j<cardOrder.length;j++){
        document.getElementById("game-board").appendChild(cardOrder[j]);
    }
}

createBoard();
