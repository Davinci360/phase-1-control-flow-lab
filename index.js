function scuberGreetingForFeet(number){
  let result;
    /* const feet = undefined;
  let greeting;
  if (feet <= 400) {
    greeting = "free ride";
    } else if (feet <= 2500) {
      greeting = "30 bucks";
      } else {
        greeting = "no can do";
        }
  }*/

      if (number <= 400) {
        return 'This one is on me!';
    } else if (number <= 2500) {
      return "I will gladly take your thirty bucks.";
    } else {
      return "No can do.";
    }
  }

function ternaryCheckCity(city){
  // Write your code here!

    return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  }
  /* ternaryCheckCity()
      1) returns "Ok, sounds good." when the city is NYC
      2) should return "No go." if the destination city is not NYC*/


function switchOnCharmFromTip(tip){
  switch (tip) {
     // 1) should return "Thank you so much." if the tip is generous
     case 'generous':
      return 'Thank you so much.';
     // 2) should return "Thank you." if the tip is not as generous
     case 'not as generous':
      return 'Thank you.';
      //3) should return "Bye." if anything else
      default:
        return 'Bye.';
  }
}
/* This is how it works:

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed. */