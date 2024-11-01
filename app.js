let resultsElement = document.getElementById("results");

//the event listener
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let inputElement = document.querySelector("#search-input");
  getWord(inputElement.value);
  inputElement.value = "";
});

//api function
function getWord(word) {
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  axios.get(apiUrl).then(renderWord);
}

//render function
function renderWord(res) {
  let htmlOutput = "";
  console.log(res.data);
  res.data.forEach((word, index) => {
    resultsElement.innerHTML += `
        <h3 class="word">${word.word}</h3>
        <audio controls class="audio">
          <source
            src='${word.phonetics[index].audio[0]}'
          />
        </audio>
        <p class="def">${word.meanings[index].defitions}</p>
        <p class="example">
          <i class="fa-regular fa-lightbulb fa-shake"></i>
        </p>   
    `;
    console.log(word.phonetics[index].audio);
  });
}
