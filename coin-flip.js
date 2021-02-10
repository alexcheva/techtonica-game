// Coin Flip
// Make a web page where you can flip a coin and it comes up heads 50% of times and tails 50% of times.
//const output = ["<span class='heads'>heads</span>","<span class='tails'>tails</span>"];
//const imgUrl = ["img/heads.png","img/tails.png"];

const button = document.getElementById("submitButton");
// const gridContainer = document.querySelector(".gridContainer");
const result = document.getElementById("result");
const color = `rgb(${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)})`;

const output = [
  {
    name: "heads",
    span: "<span class='heads'>heads</span>",
    imgUrl: "img/heads.png"
  },
  {
    name: "tails",
    span: "<span class='tails'>tails</span>",
    imgUrl: "img/tails.png"
  }
];

document.getElementById("coinForm").onsubmit = () => {
  let number = document.getElementById("numCoins").value;
  
  result.innerText = "";
  button.value = "Flip Again.";
  button.setAttribute("class", "orange");

  let h2 = document.createElement("h2");
  h2.innerText = "Your Results:";

  let gridContainer = document.createElement("div");
  gridContainer.setAttribute("class", "grid-container");
  result.appendChild(h2);
  result.appendChild(gridContainer);


  for(let i=1; i<=number; i++){
    let randomNum = Math.floor(Math.random()*2);
    let div = document.createElement("div");

    let h5 = document.createElement("h5");
    h5.textContent = `Coin ${i}`;
    h5.setAttribute("style", `color:${color}`);

    let img = document.createElement("img");
    img.setAttribute("src", output[randomNum].imgUrl);
    img.setAttribute("alt", output[randomNum].name);

    let p = document.createElement("p");
    p.innerHTML = `lands on ${output[randomNum].span}.`;
    
    div.appendChild(h5);
    div.appendChild(img);
    div.appendChild(p);
    gridContainer.appendChild(div);
  }
};
