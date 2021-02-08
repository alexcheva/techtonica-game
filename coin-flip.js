// Coin Flip
// Make a web page where you can flip a coin and it comes up heads 50% of times and tails 50% of times.

// Extensions:

// Add a box where the user can say how many coins they want to flip. Then display that many coins and flip them all randomly.
var num = window.prompt("How many coins would you like to flip?");
console.log(num, typeof num);
console.log(parseInt(num),typeof parseInt(num))
function flipCoin(num){
  let output = ["heads","tails"];
  num = parseInt(num);
  if(isNaN(num)){
    window.alert("Please, choose a numeric value.")
  }else{
    
    for(let i=1; i<=num; i++){
      let result = Math.floor(Math.random()*2);
      console.log(result);
      console.log(`Coin ${i} lands on ${output[result]}.`)
    }
  }
  
}
flipCoin(num);