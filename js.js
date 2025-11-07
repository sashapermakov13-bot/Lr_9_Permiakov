const cards = [
  {name:"6", value:6, img:"6H.png"},
  {name:"7", value:7, img:"7H.png"},
  {name:"8", value:8, img:"8H.png"},
  {name:"9", value:9, img:"9H.png"},
  {name:"10", value:10, img:"0H.png"},
  {name:"Валет", value:2, img:"JH.png"},
  {name:"Дама", value:3, img:"QH.png"},
  {name:"Король", value:4, img:"KH.png"},
  {name:"Туз", value:11, img:"AH.png"}
];

let userName = prompt("Введіть своє ім’я:");
if(!userName) userName = "User";
document.getElementById("userName").textContent = userName;

let userTotal = 0;
let compTotal = 0;
let round = 1;

document.getElementById("generate").onclick = () => {
  if (round <= 3) {
    let userCard = cards[Math.floor(Math.random()*cards.length)];
    let compCard = cards[Math.floor(Math.random()*cards.length)];

    userTotal += userCard.value;
    compTotal += compCard.value;

    document.getElementById("userCard").src = userCard.img;
    document.getElementById("compCard").src = compCard.img;

    document.getElementById("userScore").textContent = userTotal;
    document.getElementById("compScore").textContent = compTotal;

    document.getElementById("try").textContent = `Спроба ${round} з 3`;
    round++;

    if (round > 3) {
      document.getElementById("generate").disabled = true;
      document.getElementById("generate").style.background = "gray";

      let result = "";
      if (userTotal > compTotal) result = `${userName} виграв! `;
      else if (userTotal < compTotal) result = "Комп’ютер виграв ";
      else result = "Нічия ";

      document.getElementById("result").textContent = result;
    }
  }
};
