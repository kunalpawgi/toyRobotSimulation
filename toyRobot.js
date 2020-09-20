//toy application for movement on the board

module.exports = class ToyRobot{

  // Creating a constructor of the ToyRobot class
  constructor(x,y,direction){
    this.x = x
    this.y = y
    this.direction = direction
  }

  // Reporting the position of the toy robot on the tabletop
  report(){
    console.log(`Reported Position - ${this.x}, ${this.y} ,${this.direction}`)
  }

  // Moving the toy robot in the specified direction
  move(){
    let flag = false
    if (this.direction === "NORTH"){
      if (this.y+1 >= 0 && this.y+1 <=4){
        this.y = this.y+1
        flag = true
      }
    }
    else if (this.direction === "SOUTH"){
      if (this.y-1 >= 0 && this.y-1 <=4){
        this.y = this.y-1
        flag = true
      }
    }
    else if (this.direction === "EAST"){
      if (this.x+1 >= 0 && this.x+1 <=4){
        this.x = this.x+1
        flag = true
      }
    }
    else if (this.direction === "WEST"){
      if (this.x-1 >= 0 && this.x-1 <=4){
        this.x = this.x-1
        flag = true
      }
    }

    if (flag === false){
      console.log("Invalid move - Can't Update the location")
    }
  }

  // Move Left from the current direction
  moveLeft() {
    if (this.direction === "NORTH"){
      this.direction = "WEST"
    }
    else if (this.direction === "EAST"){
      this.direction = "NORTH"
    }
    else if (this.direction === "SOUTH"){
      this.direction = "EAST"
    }
    else if (this.direction === "WEST"){
      this.direction = "SOUTH"
    }
  }

  // Move right from the current direction
  moveRight() {
    if (this.direction === "NORTH") {
      this.direction = "EAST"
    }
    else if (this.direction === "EAST") {
      this.direction = "SOUTH"
    }
    else if (this.direction === "SOUTH"){
      this.direction = "WEST"
    }
    else if (this.direction === "WEST"){
      this.direction = "NORTH"
    }

  }


};
