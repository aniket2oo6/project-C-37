class Quiz{
    constructor(){}
    
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref("contestantCount").once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }

    play(){
        question.hide();
        background("yellow");
        textSize(20);
        text("Result of the Quiz",330,60);
        contestant.getContestantInfo();
        if(contestants!==undefined){
            var o = 270;
            for(var plr in contestants){
                var correctAns = "2";
                if(correctAns === contestants[plr].contestant.index,o){
                    fill("green");
                }else{
                    fill("red");
                }
            }
        }
    }
}