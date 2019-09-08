const userScore = 0;
const compScore = 0;

//Cached the DOM variables, HTML <var> elements
// . is for class, we query selectit
// # is for id, we get the element
const userScore_span = document.getElementById("user-score"); //get user-score element in span tag
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p"); //get the p tag
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissorsdiv = document.getElementById("s");

function getCompChoice(){
  const choices = ['r', 'p', 's'];
  const choiceNo = Math.floor(Math.random() * 3;

  return choices[choiceNo];
}

function gameResult(result, userChoice, compChoice){
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);

  if (result == 'w'){
    userScore++;
    userScore_span.innerHTML = userScore; //change the element span HTML into this.
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}. You win!`; //backtick is for template strings

    userChoice_div.classList.add('.green-glow'); //add green glow class to r, p or s class
    setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 300); //timeout javascript FUNCTIONALITY

  } else if (result == 'l') {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(compChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You win!`;

    userChoice_div.classList.add('.red-glow'); //add green glow class to r, p or s class
    setTimeout(function() { userChoice_div.classList.remove('red-glow')}, 300);
  } else {
    result_div.innerHTML = `${convertToWord(compChoice)}${smallCompWord} equals ${convertToWord(userChoice)}${smallUserWord}. Draw!`;
  }
}

function convertToWord(letter){
  if (letter == 'r'){
    return "Rock";
  } else if (letter == 's') {
    return "Scissors";
  } else {
    return "Paper";
  }
}

/*MAIN GAME FUNCTIONALITY*/
function game(userChoice){
  const compChoice = getCompChoice();
  switch (userChoice + compChoice){
    case "rs":
    case "pr":
    case "sp":
    gameResult('w', userChoice, compChoice);
    break;

    case "rp":
    case "ps":
    case "sr":
    gameResult('l', userChoice, compChoice);
    break;

    case "ss":
    case "rr":
    case "pp":
    gameResult('d', userChoice, compChoice);
    break;
  }
}

function main() {
  rock_div.addEventListener('click', function(){ //when tag event click, execute function argument passed in.
    game("r");
  })

  paper_div.addEventListener('click', function(){
    game("p");
  })

  scissors_div.addEventListener('click', function(){
    game("s");
  })
}

main();
