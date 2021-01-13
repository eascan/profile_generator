let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.question('What do you think of Node.js? ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
  

//   rl.close();
// })});

const survey = function() {
let answer1 = '';
let answer2 = '';
let answer3 = '';
let answer4 = '';
let answer5 = '';
let answer6 = '';
let answer7 = '';

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer1) => {
  

  rl.question('What\'s an activity you like doing? ', (answer2) => {
    

    rl.question('What do you listen to while doing that? ', (answer3) => {
      

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          

          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);

      
              rl.close();
            })
          })
        })
      })
    })
  })
  
})

console.log(answer1)

}
survey()







/*
let survey = function() {
  let answersArr = [];
  rl.question('What\'s your name? Nicknames are also acceptable : '), (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you ${answer}.`);
    answersArr.push(answer);
  
    rl.on('line', (line) => {
      rl.question('What\'s an activity you like doing?', (answer) => {
        // TODO: Log the answer in a database
        console.log(`Thank you`);
        answersArr.push(answer);
        rl.close();
      });
    }) 
  }
}
survey();

*/