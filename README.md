# toyRobotSimulation
Toy robot simulation on a 5*5 tabletop

- The application is a simulation of a toy robot moving on a square tabletop,
  of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be
  prevented from falling to destruction. Any movement that would result in the
  robot falling from the table must be prevented, however further valid
  movement commands must still be allowed.

  Constraints
  -----------

  - The toy robot must not fall off the table during movement. This also
    includes the initial placement of the toy robot.
  - Any move that would cause the robot to fall must be ignored.

  Node Installation
  -------------------
  The application requires Node Js which can be downloaded from the following link -
  https://nodejs.org/en/

  Running the application
  ------------------------

  ```
  node runTest.js
  ```

  - Commands can be given through a text file in the 'tests' folder.
  - the runTests.js picks up the files one by one and runs based on the commands given in the text file.

  Example Input
  ------------------------

  ### /tests/command-1.txt

  ```
  PLACE 1,2,EAST
  MOVE
  MOVE
  LEFT
  MOVE
  REPORT
  ```

  ### /tests/command-2.text

  ```
  PLACE 0,0,NORTH
  MOVE
  REPORT
  ```
