const boardNumbers = [];

const createNumbersBoard = function () {
  const numbersBoard = document.getElementById("numbers-board");
  for (let i = 0; i < 90; i++) {
    const numberCell = document.createElement("div");
    numberCell.textContent = i + 1;
    numberCell.classList.add("numberCell");
    boardNumbers.push(numberCell.textContent);
    numbersBoard.appendChild(numberCell);
  }
};

createNumbersBoard();

const pullButton = document.querySelector("button");

pullButton.addEventListener("click", function (e) {
  const randomNumb = Math.ceil(Math.random() * 90);

  const pulledNumber = document.querySelector("#pulled-number div");
  pulledNumber.textContent = randomNumb;
  pulledNumber.classList.add("pulled-number");

  const allNumberCells = document.querySelectorAll("#numbers-board div");

  allNumberCells.forEach((cell) => {
    if (parseInt(cell.textContent) === randomNumb) {
      cell.classList.add("pulledNumbers");
    }
  });
});
