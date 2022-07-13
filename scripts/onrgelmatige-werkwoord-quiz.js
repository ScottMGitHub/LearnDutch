let expectedAnswer = "";

const refresh = () => {
    var randomQuestionWord = onregelmatigeWerkwoorden[Math.floor(Math.random()*onregelmatigeWerkwoorden.length)];

    // get random tense, other than first tense (infinitief)
    var randomTense = Math.floor(Math.random()*4);
    randomTense = randomTense === 0 ? randomTense + 1 : randomTense;

    var randomTenseValue = onregelmatigeWerkwoordenDataKey[randomTense];
    expectedAnswer = randomQuestionWord[randomTense];

    console.log(randomQuestionWord);

    var question = document.getElementsByClassName("question-word")[0];
    question.innerHTML = `${randomQuestionWord[0]}`;

    var tense = document.getElementsByClassName("question-tense")[0];
    tense.innerHTML = randomTenseValue;

    // Clear
    var answer = document.getElementById("answer");
    var result = document.getElementsByClassName("result")[0];
    answer.value = "";
    result.innerHTML = "";
}

const checkAnswer = () => {
    var answer = document.getElementById("answer").value;
    var result = document.getElementsByClassName("result")[0];
    result.innerHTML = expectedAnswer == answer.toLowerCase() ? "<div class=\"result-success\">Juist!</div>" : "<div class=\"result-fail\">Niet correct</div>";
}


var wordList = document.getElementsByClassName("word-list-wrapper-body")[0];

// Table
let content = '';
onregelmatigeWerkwoorden.forEach(word => {
    content += `<div class="word-row">`;
    word.forEach(wordTense => {
        content += `<div class="word-cell">${wordTense}</div>`;
    });
    content += `</div>`;
});
wordList.innerHTML = content;

window.onload = (event) => {
    refresh();
}
