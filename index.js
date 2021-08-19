var readLineSync = require('readline-sync');


var currentScore=0;
const highScores = [
  {
    name: "Shivani",
    score: 5,
  },

  {
    name: "Shivam",
    score: 4,
  }
]

const Questions=[
  {
  question:'Where do i live ?',
  answer:'gwalior',
  
  },
  {
  question:'Whats my favourite Sports ?',
  answer:'Football',
  
  },
  {
  question:'Which is my favourite series ?  ',
  answer:'Friends',
  
 
  },
]
function LetsPlay(ques)
{

  // console.log(ques)
  var UserAnswer=readLineSync.question(ques.question)
  if(UserAnswer.toLowerCase()===ques.answer.toLowerCase())
  {
    currentScore=currentScore+1
    console.log("Right!")
  }
  else{
    console.log("Wrong!")
  }  

  console.log("Current Score: "+currentScore)
  console.log("-----------------")
  

}
var username=readLineSync.question("what is your name ? ")

console.log(`Welcome ${username} to this game `)
console.log("")
console.log(`Let's see how much you know me :) `)
console.log("")
for(let i =0;i<Questions.length;i++)
{
  LetsPlay(Questions[i])
} 

console.log("Yay! you score "+currentScore)
console.log("Check out the high scores, and Send me a screenshot I'll update it")

for(let i =0;i<highScores.length;i++)
{
  console.log(highScores[i].name,":",highScores[i].score)
}
