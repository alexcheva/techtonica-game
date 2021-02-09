// Coin Flip
// Make a web page where you can flip a coin and it comes up heads 50% of times and tails 50% of times.
const output = ["<span class='heads'>heads</span>","<span class='tails'>tails</span>"];
const imgUrl = ["img/heads.png","img/tails.png"];
const button = document.getElementById("submitButton");
const result = document.getElementById("result");
const color = `rgb(${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)})`;
// console.log(color);
// function randomColor(){
//   return `rgb(${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)})`;
// }

document.getElementById("coinForm").onsubmit = () => {
  let number = document.getElementById("numCoins").value;
  if(number.value !== undefined){
    result.innerText = "";
    button.value = "Flip Again.";
    button.setAttribute("class", "orange");
    
    let h2 = document.createElement("h2");
    h2.innerText = "Your Results:";
    result.appendChild(h2);
  
    for(let i=1; i<=number; i++){
      let randomNum = Math.floor(Math.random()*2);
      let p = document.createElement("p");
      p.innerHTML = `<span style="color:${color}">Coin ${i}</span> lands on ${output[randomNum]}.`;
      result.appendChild(p);
    }
  }

};

// function returnResults() {
// //
// }