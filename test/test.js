//var test = require('tap').test;
var mine = require('../minesweep.js')('PROD');

mine.createGame(8,9);
mine.click(0,0);
mine.show();
//var arr = ms.freeSpaces();
//console.log(arr);

for (var i=0; i<10; i++) {
    var fs = mine.randomFreeSpace();
    console.log(fs);
    if (fs === 'INVALID') {
        console.log("NO MORE FREE SPACES");
    } else {
        console.log(mine.click(fs.x, fs.y));
        mine.show();
    }
}

mine.cheat();     // to see where the bombs are
