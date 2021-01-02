//set the outputs for the random message generator - requires 3
const firstOutput = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'saggitarius', 'capricorn', 'aquarius', 'pisces'];
const secondOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const thirdOutput = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log('Testing the console');


//function to generate the desired message
function messageGenerator() {
    let starSign = firstOutput[Math.floor(Math.random() * firstOutput.length)];
    //console.log(starSign);
    let numberFav = secondOutput[Math.floor(Math.random() * secondOutput.length)];
    //console.log(numberFav);
    let day = thirdOutput[Math.floor(Math.random() * thirdOutput.length)];
    //console.log(day);
    console.log(`Your Star sign is ${starSign}, your favourite number is ${numberFav} and you really enjoy the day before ${day}!`);
} 

messageGenerator();
