class Game{
    constructor(){}
    getState(){
        var gamestateRef=database.ref('gamestate')
        gamestateRef.on("value",function(data){
            gamestate=data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gamestate:state
        })
    }
    
    async start(){
        if (gamestate==0){
            player= new Player()
            var playerCountRef=await database.ref('playerCount').once("value")
            if (playerCountRef.exists()){
                playerCount=playerCountRef.val()
                player.getCount()
            }
            form=new Form()
            form.display()
        }
        car1= createSprite(100,200)
        car2= createSprite(300,200)
        car3= createSprite(500,200)
        car4=createSprite(700,200)
        cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide()
        textSize(30)
        text("Game Start", 120, 100)
        Player.getPlayerInfo()
        
        if(allPlayers!==undefined){
            // var displayPosition=130
            // idexn of the array
            var index=0;
            //X AND Y POSITIONS OF THE CARS
            var x=0
            var y
            for(var plr in allPlayers){
                // add one to the index of every looop
                index=index+1
                //position the cars awaw from each other in x axis
                x=x+200
                // use data from the database to dispaly to display the cars in y direction.
                y=displayHeight-allPlayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if (index==player.index){
                cars[index-1].shapeColor="red"
                camera.position.x=displayWidth/2;
                camera.poisiton.y=cars[index-1].y
                }

                if(plr=="player"+player.index){
                fill("red")}
                else
                fill("black")
                displayPosition+=20
                textSize(15)
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)

            }
        }
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+=50
            player.update()


        }
    }
}