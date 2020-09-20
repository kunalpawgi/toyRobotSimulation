
// Importing the class ToyRobot from 'toyRobot.js'
var ToyRobot = require("./ToyRobot.js");

// Specifying path for the tests folder containing commands for moving the
// robot on the tabletop
const testFolder = './tests/'


const fs = require('fs')

// Reading each file in the tests directory
fs.readdirSync(testFolder).forEach(file => {

  // Printing the file name on the console
  console.log('----------------')
  console.log(file);
  console.log('----------------')

  // Fetching commands from the text file

  // 1. Converting the content read by the file reader to String format
  // 2. Splitting the strings line by line
  command = fs.readFileSync('./tests/'+file+'', 'utf8').toString().split("\n")

  // Creating variables for X, Y, direction
  var x_pos;
  var y_pos;
  var direction;

  // Initializing the toy variable for instantiation on getting the PLACE command
  var toy;

  // Iterating through the contents of the file line by line
  for (let i=0; i<command.length; i++) {

    // Formatting the string (command) by removing all the line breaks (\t) and split
    command[i] = command[i].trim().split(" ");

    // Printing the command on the console
    console.log(command[i])

    // Checking if the length of the string after split is > 1
    if (command[i].length > 1) {

      // Checking if the command is PLACE at index 0
      if (command[i][0] === 'PLACE') {

        // Extracting the X position, Y position and direction from the respective placeholders by splitting on ','
        x_pos = parseInt(command[i][1].split(",")[0])
        y_pos = parseInt(command[i][1].split(",")[1])
        direction = command[i][1].split(",")[2]

        // Creating a new Toy Robot Object
        toy = new ToyRobot(x_pos, y_pos, direction)
      }
    }
    else {

      if (command[i][0] === 'MOVE') {             // Checking if the command is MOVE at index 0
        toy.move()
      } else if (command[i][0] === 'LEFT') {      // Checking if the command is LEFT at index 0
        toy.moveLeft()
      } else if (command[i][0] === 'RIGHT') {     // Checking if the command is RIGHT at index 0
        toy.moveRight()
      } else if (command[i][0] === 'REPORT') {    // Checking if the command is REPORT at index 0
        toy.report()
      }

    }
  }

});
