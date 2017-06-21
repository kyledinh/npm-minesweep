Minesweep
---------
A minesweeper game written as a javascript module. The data structure is simple: a Game contains a Grid that contains a 2D array of Tiles. The Tiles contain all the state information for the game play. As clicks are made, the "status" of the Tiles are changed from "UNKNOWN" to "CHECKED".  Unless of course the status is "BOMB", which then is an invalid click and ends the game.

All the data is keep in the Grid/Tile objects so it can be easily export as JSON or read as an object. This detaches this data from the display. The console log display is for debugging, however it can also be used to play the game.

* This version is the NPM module for my earlier code written at: https://github.com/kyledinh/toolkit/tree/master/mindsweep

Data Structure
--------------
```
Game(x, y)
  |
  .grid ------------ Grid(x, y)
  .moves               |
  .numBombs            .tiles[][] ------- Tile(status, x, y)
  |                    .x                   .x
  |                    .y                   .y
  |                    |                    .touch     # bombs are adjacent
  |                    |                    .status    { UNKNOWN | CHECKED | CLICKED | BOMB }
  |                    |                    |
  .stringify()         .stringifyTiles()    |
  |                    .parseTiles()        |
  |                    |                    |
  .show()              .show()              .show()    { "=" | " " | 1-8 }
  .cheat()             .cheat()             .cheat()   { "*" }            
  .over()              |                    |
  |                    |                    |
  .start(n)            .setup()             |                              
  |                    .layBombs(n)         |
  |                    .updateTiles()       .updateTouch(n)
  |
  .click(x, y) { INVALID | BOMB | OK }

```

Public Module Methods
---------------------
```
createGame(x, y, bombs)  // creates a game with x width, y height and number of bombs
click(x,y)               // selects a grid tile to play
show()                   // returns a object of the grid
cheat()                  // returns the grid with all tiles revealed
freeSpaces()             // returns a list of free spaces [ {}, {} ]
randomFreeSpace()        // returns a random free space {x, y}
```


Executing via CLI
-----------------
This code can be ran from the command line with node.js or V8. Or a browser's javascript console. createGame() takes the x and y for the Grid size, and the third argument is the number of desired bombs (8 is default).
```
 * node
 * .load ./minesweep.js
 * var ms = new APP.Minesweep;
 * ms.createGame(12,12,8);
 * ms.click(2,3);

```
ms.show() // console.log
```
show:
         0   1   2   3   4   5   6   7   8   9   10  11  
row  0 :[ ] [ ] [ ] [ ] [ ] [ ] [1] [=] [=] [=] [=] [=]
row  1 :[1] [1] [ ] [ ] [ ] [ ] [1] [=] [=] [=] [=] [=]
row  2 :[=] [1] [ ] [ ] [ ] [ ] [=] [=] [=] [=] [=] [=]
row  3 :[=] [1] [ ] [ ] [1] [1] [=] [=] [=] [=] [=] [=]
row  4 :[=] [1] [1] [ ] [=] [=] [=] [=] [=] [=] [=] [=]
row  5 :[=] [=] [=] [1] [=] [=] [=] [=] [=] [=] [=] [=]
row  6 :[=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=]
row  7 :[=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=]
row  8 :[=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=]
row  9 :[=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=]
row 10 :[=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=]
row 11 :[=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=]
row 12 :[=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=] [=]
```

object returned from show()
```
[{x: 0, y: 0, show: "="}, {x: 1, y: 0, show: 1}, {x: 2, y: 0, show: " "}, {x: 3, y: 0, show: " "},
{x: 4, y: 0, show: " "}, {x: 5, y: 0, show: " "}, {x: 6, y: 0, show: " "}, ... ]
```


ms.cheat() // console.log
```
cheat view:
         0   1   2   3   4   5   6   7   8   9   10  11  
row  0 :[0] [0] [0] [0] [0] [0] [1] [*] [1] [0] [1] [*]
row  1 :[1] [1] [0] [0] [0] [0] [1] [1] [1] [0] [1] [1]
row  2 :[*] [1] [0] [0] [0] [0] [0] [0] [0] [0] [0] [0]
row  3 :[1] [1] [0] [0] [1] [1] [1] [0] [0] [0] [0] [0]
row  4 :[1] [1] [1] [0] [1] [*] [1] [0] [0] [0] [0] [0]
row  5 :[1] [*] [2] [1] [1] [1] [1] [0] [1] [2] [2] [1]
row  6 :[1] [3] [*] [2] [0] [0] [0] [0] [1] [*] [*] [1]
row  7 :[0] [2] [*] [3] [1] [0] [0] [0] [1] [2] [2] [1]
row  8 :[0] [1] [2] [*] [1] [0] [0] [0] [0] [1] [1] [1]
row  9 :[0] [0] [1] [1] [1] [0] [0] [0] [0] [1] [*] [1]
row 10 :[0] [0] [0] [0] [0] [0] [0] [0] [0] [1] [1] [1]
row 11 :[0] [0] [0] [0] [0] [0] [1] [1] [1] [0] [0] [0]
row 12 :[0] [0] [0] [0] [0] [0] [1] [*] [1] [0] [0] [0]
```

object returned from cheat()
```
[{x: 0, y: 1, show: "*"}, {x: 1, y: 3, show: "*"}, {x: 0, y: 4, show: "*"}, {x: 3, y: 5, show: "*"},
{x: 7, y: 5, show: "*"}, {x: 4, y: 7, show: "*"}, {x: 6, y: 7, show: "*"}, {x: 7, y: 7, show: "*"}]
```

Usage
-----
This module is written to use `require()` in the Nodejs context or directly included in an HTML context with a `<script>` tag. In the browser, the module will be loaded to the global namespace as `APP.Minesweep`. With the option of setting `APP.LOG_LEVEL='DEBUG'` to turn the console.log to a verbose state for debugging. Just use the `mindsweep.js` file without alteration.

In the Nodejs context
```
npm install npm-minesweep
```
In `your-script.js` file
```
var ms = require('npm-minesweep')('DEBUG');
ms.createGame(10,10,6);   // 10x10 grid with 6 bombs
ms.click(2,3);
ms.show();
ms.click(4,8);
ms.show();
ms.cheat();
...
```


Notes
-----
<img src="https://lh6.googleusercontent.com/p_RWhFwdGRuIbD3TtkStUqfhOagyfM86ouJbH9mTHNZRdZwA-7g999pLip6jIJXoZtWfWKOP5d-cGxWRbP16PGj307fOpJ_ZgPZNxSi2hu0g07Wc8MGCZuLINg"  width="600" />

Source
------
Written by Kyle Dinh, 2013 and 2017

https://github.com/kyledinh/toolkit/tree/master/mindsweep
