const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  r1.question(`What's your name? Nicknames are also acceptable :)`, (name) =>{

  
    r1.question(`What's an activity you like doing?
`, (activity) =>{

    
        r1.question(`What do you listen to while doing that?`, (listen) =>{

      
          r1.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (mealTime) =>{

        
            r1.question(`What's your favourite thing to eat for that meal?`, (meal) =>{

          
              r1.question(`Which sport is your absolute favourite?`, (sport) =>{

            
                r1.question(`What is your superpower? In a few words, tell us what you are amazing at!
`, (superpower) => {
                    console.log(`${name} likes doing ${activity} while listening to ${listen}, ${name}'s favourite meal time is ${mealTime} and favourite meal during that time is ${meal}, ${name}'s favourite sport is ${sport}, and ${name}'s superpower is ${superpower}`);


                    rl.close();
    
              })
            })
          })
        })
      })
    })
  })

  
  
  
  
  
  
  
});