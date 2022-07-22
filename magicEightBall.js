//script will output a random fortune

let userName='Ana';
userName ? console.log(`Hello, ${userName}!`) :
console.log('Hello!');

let userquestion='Will I become a draculina tonight?';
console.log(`The user asked: ${userquestion}`);

const randomNumber = Math.floor(Math.random()*8);
let eightball = '';
switch (randomNumber) {
  case 0:
    eightball = 'It is certain';
    break;
   case 1:
    eightball = 'Signs point to yes';
    break;
  case 2:
    eightball = 'It is decidedly so';
    break;
  case 3:
    eightball = 'Reply hazy try again';
    break;
  case 4:
    eightball = 'Cannot predict now';
    break;
  case 5:
    eightball = 'Do not count on it';
    break;
  case 6:
    eightball = 'My sources say no';
    break;
  case 7:
    eightball = 'Outlook not so good';
    break;
}

console.log(`The eight ball answered: ${eightball}`);
