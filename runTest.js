var ToyRobot = require("./ToyRobot.js");
const testFolder = './tests/'
const fs = require('fs')

fs.readdirSync(testFolder).forEach(file => {

  console.log('----------------')
  console.log(file);
  console.log('----------------')

  command = fs.readFileSync('./tests/'+file+'', 'utf8').toString().split("\n")

  //Checking if the first command is "PLACE"
  var x_pos;
  var y_pos;
  var direction;
  var toy;

  for (let i=0; i<command.length; i++) {
    command[i] = command[i].trim().split(" ");
    console.log(command[i])

    if (command[i].length > 1) {
      if (command[i][0] === 'PLACE') {
        x_pos = parseInt(command[i][1].split(",")[0])
        y_pos = parseInt(command[i][1].split(",")[1])
        direction = command[i][1].split(",")[2]
        toy = new ToyRobot(x_pos, y_pos, direction)
      }
    }
    else {
      if (command[i][0] === 'MOVE') {
        toy.move()
      } else if (command[i][0] === 'LEFT') {
        toy.moveLeft()
      } else if (command[i][0] === 'RIGHT') {
        toy.moveRight()
      } else if (command[i][0] === 'REPORT') {
        toy.report()
      }

    }
  }

});
