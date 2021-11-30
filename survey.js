const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = ["What's your name? ", "What's an activity you like doing? ",
  "What do you listen to while doing that? ", "Which meal is your favourite? ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ", "What is your superpower? "];
let answers = [];

const printProfileInfo = () => {
  const [userName, activity, music, meal, food, sport, power] = answers;
  console.log(
    `\n${userName} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${power}.`
  );
};

const askAQuestion = (i) =>{
  rl.question((questions[i]), (answer) => {
    answers.push(answer);
    i++;
    if (questions[i]) {
      askAQuestion(i);
    } else {
      rl.close();
      printProfileInfo();
    }
  });
};
askAQuestion(0);
