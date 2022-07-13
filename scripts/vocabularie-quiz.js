let expectedAnswer = "";

const refresh = () => {

    // Get random word
    var randomQuestionWord = vocaularieWoorden[Math.floor(Math.random()*vocaularieWoorden.length)];
    expectedAnswer = randomQuestionWord[1];

    // Get random answers
    var possibleAnswers = generatePossibleAnswers(randomQuestionWord);

    // set question
    var questionWord = document.getElementsByClassName("question-word")[0];
    questionWord.innerHTML = randomQuestionWord[0];

    // set possible answers
    var possibleAnswersWrapper = document.getElementsByClassName("multiple-choice-options-wrapper")[0];
    possibleAnswersWrapper.innerHTML = "";
    for(var i = 0; i <= possibleAnswers.length - 1; i++) {
        if(possibleAnswers[i] != 'undefined') {
            possibleAnswersWrapper.innerHTML += `<input type="radio" id="${possibleAnswers[i][1]}" name="translation-answer" value="${possibleAnswers[i][1]}">`;
            possibleAnswersWrapper.innerHTML += `<label for="html">${possibleAnswers[i][1]}</label><br/>`;
        }
    }

    // Clear
    var result = document.getElementsByClassName("result")[0];
    result.innerHTML = "";
}

const generatePossibleAnswers = (correctAnswer) => {

    let possibleAnswers = [correctAnswer];

    //Generate 4 possible answers
    for(var i = 0; i <= 3; i++) {
        var randomWord = vocaularieWoorden[Math.floor(Math.random()*vocaularieWoorden.length)];
        possibleAnswers.push(randomWord);
    }

    return shuffle(possibleAnswers);
}

const shuffle = (possibleAnswers) =>  {
    let currentIndex = possibleAnswers.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [possibleAnswers[currentIndex], possibleAnswers[randomIndex]] = [
        possibleAnswers[randomIndex], possibleAnswers[currentIndex]];
    }
  
    return possibleAnswers;
}

const checkAnswer = () => {
    var answer = document.querySelector('input[name="translation-answer"]:checked');
    var result = document.getElementsByClassName("result")[0];
    result.innerHTML = answer != null 
    && answer != 'undefined' 
    && expectedAnswer == answer.value.toLowerCase() 
        ? "<div class=\"result-success\">Juist!</div>" 
        : "<div class=\"result-fail\">Niet correct</div>";
}

window.onload = (event) => {
    refresh();
}