var rollNum = 0
var rollTwo = ['']
function rollDice(){
  rollNum = Math.floor((Math.random() * 6) + 1);
  document.getElementById('result').value = rollNum
console.log(rollNum)
}
function rollTwoDie() {
  rollTwo = ['']
  rollTwo[0] = Math.floor((Math.random() * 6) + 1);
 rollTwoAgain = Math.floor((Math.random() * 6) + 1);
 rollTwo.push(rollTwoAgain)
   document.getElementById('result').value = rollTwo
}
