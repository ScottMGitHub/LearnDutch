var wordList = document.getElementsByClassName("word-list-wrapper-body")[0];
let content = '';
data.forEach(word => {
    content += `<div class="word-row">`;
    word.forEach(wordTense => {
        content += `<div class="word-cell">${wordTense}</div>`;
    });
    content += `</div>`;
});
wordList.innerHTML = content;
