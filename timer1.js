//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

// This will make it beep at:

// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds

const myArgs = process.argv.slice(2); //Process.argv is an aray containing the command line arguments and I do not want the node and path to script so slice

myArgs.forEach((time) => { //for each time its going to the function it will pass in the elements
  if (time > 0 && time !== null) { //If time is greater than 0 and not a null value
    setTimeout(() => {
      process.stdout.write('\x07'); //Print sound
    }, time * 1000);  //input converting to seconds
  }
});
