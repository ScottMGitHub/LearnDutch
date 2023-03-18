let expectedPreposition = "";

const refresh = () => {
    var randomExample = preposities[Math.floor(Math.random()*preposities.length)];
    expectedPreposition = randomExample[1];
    const regex = new RegExp(expectedPreposition, 'gi');
    const exampleQuestion = randomExample[2].replace(regex, "____");

    var question = document.getElementsByClassName("question-word")[0];
    question.innerHTML = `${exampleQuestion}`;


    var translation = document.getElementsByClassName("question-tense")[0];
    translation.innerHTML = `(${randomExample[3]})`;


    // Clear
    var answer = document.getElementById("answer");
    var result = document.getElementsByClassName("result")[0];
    answer.value = "";
    result.innerHTML = "";
}

const checkAnswer = () => {
    var answer = document.getElementById("answer").value;
    var result = document.getElementsByClassName("result")[0];
    result.innerHTML = expectedPreposition == answer.toLowerCase() ? "<div class=\"result-success\">Juist!</div>" : "<div class=\"result-fail\">Niet correct</div>";
}

var wordList = document.getElementsByClassName("word-list-wrapper-body")[0];

// Table
let content = '';
preposities.forEach(prepositionExample => {
    console.log(prepositionExample)
    content += `<div class="word-row">`;
    content += `<div class="word-cell">${prepositionExample[1]}</div>`;
    content += `<div class="word-cell">${prepositionExample[2]}</div>`;
    content += `<div class="word-cell">${prepositionExample[3]}</div>`;
    content += `</div>`;
});
wordList.innerHTML = content;

window.onload = (event) => {
    refresh();
}
