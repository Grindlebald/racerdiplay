var canvas, backgroundImg, database, playerCount;
var gamestate=0;
var form, player, game;
var allPlayers;
var cars, car1, car2, car3, car4

function setup(){
    canvas=createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
    game=new Game()
    game.getState()
    game.start()
}

function draw(){
    if(playerCount==4){
        game.update(1)
    }
    if (gamestate===1){
        clear()
        game.play()
    }
}
