class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100);
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      var display_position = 130;
      for(var plr in allPlayers){
        if(plr === "player" + player.index)
        fill("red");
        else{
        fill("black");
        }
      
      display_position +=  20;
      textSize(20);
      text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, display_position)
    }



    }
if(keyDown("UP_ARROW") && player.index != null){
  player.distance += 50;
  player.update();
}
  }
    
    
    
    
    
    
    
    
    
    //write code here to hide question elements

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
 

}
