let userName = "Jan";
let userQuestion = "Will I win the lottery?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");

console.log(`The user asked, \"${userQuestion}\"`);

switch (randomNumber) {
  case 0:
    eightBall = "It is certain.";
    break;

  case 1:
    eightBall = "It is decidely so.";
    break;

  case 2:
    eightBall = "Reply is hazy.";
    break;

  case 3:
    eightBall = "Cannot predict now";
    break;

  case 4:
    eightBall = "Do not count on it.";
    break;

  case 5:
    eightBall = "My sources say no.";
    break;

  case 6:
    eightBall = "Signs point to Yes!";
    break;

  case 7:
    eightBall = "Outlook not so good.";
    break;

  default:
    console.log("Unknown: Try Again");
    break;
}

console.log(`Answer: ${eightBall}`);
