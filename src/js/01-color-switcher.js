// Start button
const startBtn = document.querySelector(`[data-start]`);

startBtn.addEventListener("click", colorSwitcher);

// Stop button
const stopBtn = document.querySelector(`[data-stop]`)

stopBtn.addEventListener("click", stopColorSwitcher);

lockBtn (stopBtn);


// Function to switch color of the bodyu element
let colorSwitcherTimer = null;

function colorSwitcher () {
    const bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomHexColor();
    colorSwitcherTimer = setInterval(()=> {
        bodyStyle.backgroundColor = getRandomHexColor();}, 1000);
    lockBtn (startBtn);
    unlockBtn (stopBtn);
    };

// Function to stop switch color
function stopColorSwitcher () {
    clearInterval(colorSwitcherTimer)
    lockBtn (stopBtn);
    unlockBtn (startBtn)
}

// lock and Unlock Button
function lockBtn (btnName){
    btnName.disabled = true;
};

function unlockBtn (btnName){
    btnName.disabled = false;
};

// Function to generate a random color in HEX format
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }