let raceNumber = Math.floor(Math.random() * 1000);
let runnerRegEarly = true;
let runnerAge = 18;
if(runnerRegEarly && runnerAge > 18){
  raceNumber += 1000;
}



if (runnerAge > 18 && runnerRegEarly){
  console.log(`You will race at 0930, your race number is ${raceNumber}.`)
} 

else if(runnerAge > 18 && !runnerRegEarly) {
  console.log(`You will race at 1100 and your race number is ${raceNumber}.`)
};

if (runnerAge < 18){
  console.log(`You will race at 1230 and your number is ${raceNumber}`)
} 

if(runnerAge === 18) {
  console.log(`Go to the registration desk for your birthday cake.`)
};