// Coin Flip
// Make a web page where you can flip a coin and it comes up heads 50% of times and tails 50% of times.

// var num = window.prompt("How many coins would you like to flip?");
// console.log(num, typeof num);
// console.log(parseInt(num),typeof parseInt(num))
// function flipCoin(num){
//   let output = ["heads","tails"];
//   let imgUrl = ["img/heads.png","img/tails.png"];
//   num = parseInt(num);
//   if(isNaN(num)){
//     window.alert("Please, choose a numeric value.");
//     num = window.prompt("How many coins would you like to flip?");
//     flipCoin(num);
//   }else{
//     for(let i=1; i<=num; i++){
//       let result = Math.floor(Math.random()*2);

//       console.log(result);
//       console.log(`Coin ${i} lands on ${output[result]}.`)
//     }
//   }
// }
// flipCoin(num);
let output = ["<span class='heads'>heads</span>","<span class='tails'>tails</span>"];
let imgUrl = ["img/heads.png","img/tails.png"];
let button = document.getElementById("submitButton");
let result = document.getElementById("result");
let color = `rgb(${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)})`;
// console.log(color);
// function randomColor(){
//   return `rgb(${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)})`;
// }
document.getElementById("coinForm").onsubmit = () => {
  let number = document.getElementById("coins").value;
  result.innerText = "";
  button.value = "Flip Again.";
  
  let h2 = document.createElement("h2");
  h2.innerText = "Your Results:";
  result.appendChild(h2);

  for(let i=1; i<=number; i++){
    let randomNum = Math.floor(Math.random()*2);
    let p = document.createElement("p");
    p.innerHTML = `<span style="color:${color}">Coin ${i}</span> lands on ${output[randomNum]}.`;
    //let text = document.createTextNode(`<span color="${color}">Coin ${i}</span> lands on ${output[randomNum]}.`);
   // p.appendChild(text);
    result.appendChild(p);
  }
};

// function returnResults() {
// //
// }