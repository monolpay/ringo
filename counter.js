var gameScoreTeam1 = document.getElementById("score-game-team-1");
var gameScoreTeam2 = document.getElementById("score-game-team-2");

var setScoreTeam1 = document.getElementById("score-set-team-1");
var setScoreTeam2 = document.getElementById("score-set-team-2");

var nameTeam1 = document.getElementById("team-1");
var nameTeam2 = document.getElementById("team-2");

let max_points

function updateScore(buttonId, scoreId, setId, increment, keyToPress){

    var button = document.getElementById(buttonId);
    var score = document.getElementById(scoreId);
    var set = document.getElementById(setId)

    button.addEventListener("click", function(){
        var currentScore = Number(score.textContent);
        let currentSet = Number(set.textContent)
        var newScore = currentScore + increment;
        let newSet = currentSet + increment
        if(newScore>=0){
            score.textContent = newScore;
        }

        if(newScore >= max_points){
            newScore = 0
            score.textContent = newScore
            set.textContent = newSet
        }
    });
}

function styling(button1Id, button2Id, button3Id, button4Id){
    var button = document.getElementById(button1Id);
    button.addEventListener("click", function(){

        let score1 = Number(document.getElementById("score-game-team-1").textContent) + Number(document.getElementById("score-set-team-1").textContent) * max_points
        let score2 = Number(document.getElementById("score-game-team-2").textContent) + Number(document.getElementById("score-set-team-2").textContent) * max_points

        if (score1 > score2){
        console.log("Tým 1 wins")
        document.getElementsByTagName("html")[0].style="color: green"
        }

        if(score2 > score1){
            console.log("Tým 2 wins")
        }

        if(score1 == score2){
            console.log("Remíza")
        }
})
}

function resetScore(buttonId, setOrGame){

    var button = document.getElementById(buttonId);

    button.addEventListener("click", function(){
        if(setOrGame==="set"){
            gameScoreTeam1.textContent = 0;
            gameScoreTeam2.textContent = 0;
        }else if(setOrGame==="game"){
            gameScoreTeam1.textContent = 0;
            gameScoreTeam2.textContent = 0;
            setScoreTeam1.textContent = 0;
            setScoreTeam2.textContent = 0;
            points()
        }

    });
}

function editTeamName(teamNameId){
    var teamName = document.getElementById(teamNameId);

    teamName.addEventListener("click", function(){
        var newTeamName = prompt("Nový název týmu:", teamName.textContent);
        newTeamName = newTeamName.trim();
        if(newTeamName!==null && newTeamName!==""){
            teamName.textContent = newTeamName;
        }
    });
    
}

function switchSides(buttonId){
    var button = document.getElementById(buttonId);

    button.addEventListener("click", function(){
        var x = nameTeam1.textContent;
        nameTeam1.textContent = nameTeam2.textContent;
        nameTeam2.textContent = x;

        x = gameScoreTeam1.textContent;
        gameScoreTeam1.textContent = gameScoreTeam2.textContent;
        gameScoreTeam2.textContent = x;

        x = setScoreTeam1.textContent;
        setScoreTeam1.textContent = setScoreTeam2.textContent;
        setScoreTeam2.textContent = x;
    });
}

function darkMode(buttonId){
    var button = document.getElementById(buttonId);

    button.addEventListener("click", function(){
        var x = button.textContent;
        if(x === "Noční režim"){
            button.textContent = "Denní režim";
            document.body.style.setProperty("--clr-action", "var(--clr-light)");
            document.body.style.setProperty("--clr-background", "var(--clr-dark)");
        }else{
            button.textContent = "Noční režim";
            document.body.style.setProperty("--clr-action", "var(--clr-dark)");
            document.body.style.setProperty("--clr-background", "var(--clr-light)");

        }
    });

}
  darkMode("dark-mode");
  switchSides("switch-sides");
  editTeamName("team-1");
  editTeamName("team-2");
  updateScore("team-1-game-plus", "score-game-team-1", "score-set-team-1", 1, "w"); 
  updateScore("team-1-game-minus", "score-game-team-1", "score-set-team-1", -1, "q"); 
  updateScore("team-2-game-plus", "score-game-team-2", "score-set-team-2", 1, "i"); 
  updateScore("team-2-game-minus", "score-game-team-2", "score-set-team-2", -1, "u"); 
  updateScore("team-1-set-plus", "score-set-team-1", "score-set-team-1", 1);
  updateScore("team-1-set-minus", "score-set-team-1", "score-set-team-1", -1);
  updateScore("team-2-set-plus", "score-set-team-2", "score-set-team-2", 1);
  updateScore("team-2-set-minus", "score-set-team-2", "score-set-team-2", -1);
  resetScore("new-set", "set");
  resetScore("new-game", "game");
  styling("team-1-game-plus")
  styling("team-2-game-plus")
  styling("team-1-game-minus")
  styling("team-2-game-minus")
  points()

function points(){
    max_points = prompt("Do kolika bodů se hraje?")
  while(true){
  if(max_points == 0 || max_points == NaN || max_points == undefined || max_points == null){
    max_points = prompt("Do kolika bodů se hraje?")
  }
  else{
    break
  }
}
}