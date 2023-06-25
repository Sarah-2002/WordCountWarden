// Select the elements that we need
const mainDiv = document.querySelector(".main-div");
const checkTextBtn = document.querySelector("#check-text-btn");
const textInput = document.querySelector("#text-input");
const logo = document.querySelector("#logo");
const body = document.body;
const title = document.querySelector("#title");
const footerText = document.querySelector("#footerText");

// Add a click event listener to the Check Text button
checkTextBtn.addEventListener("click", () => {
  // Show the loading animation
  mainDiv.innerHTML = `
    <div class="loading-animation">
      <div class="spinner"></div>
      <div></div>
    </div>
  `;

  // Delay the execution of the word count function by 2 seconds to simulate a slow operation
  setTimeout(() => {
    // Count the words and characters in the input text
    const wordsCount = textInput.value.trim().split(/\s+/).length;
    const charactersCount = textInput.value.trim().length;

    // Replace the content of the main div with the results and the reset button
    mainDiv.innerHTML = `
      <div>
        <input type="text" id="text-input" value="${textInput.value}" readonly>
        <i class="far fa-trash-alt delete-icon"></i>
        <i class="fas fa-mouse-pointer select-icon"></i>
      </div>
      <div>
        <p>Words Count: ${wordsCount}</p>
        <p>Characters Count: ${charactersCount}</p>
      </div>
      <button id="reset-btn" style="
        background-color: #f4473a;
        color: #fff;
        border: none;
        border-radius: 10px;
        padding: 10px 20px;
        margin-top: 20px;
        cursor: pointer;
      ">Reset</button>
    `;

    // Select the reset button and add a click event listener to reload the page
    const resetBtn = document.querySelector("#reset-btn");
    resetBtn.addEventListener("click", () => {
      location.reload();
    });
  }, 2000);
});

logo.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  title.classList.toggle("light-mode-text");
  footerText.classList.toggle("light-mode-text");
});
