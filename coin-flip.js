// Coin Flip
// Make a web page where you can flip a coin and it comes up heads 50% of times and tails 50% of times.

// Extensions:

// Add a box where the user can say how many coins they want to flip. Then display that many coins and flip them all randomly.

function flipCoin(num){
  let output = ["heads","tails"];
  for(let i=1; i<=num; i++){
    let result = Math.floor(Math.random()*2);
    console.log(result);
    console.log(`Coin ${i} lands on ${output[result]}.`)
  }
}
flipCoin(5);