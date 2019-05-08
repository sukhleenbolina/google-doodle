console.log('OK');

<<<<<<< HEAD
=======
// Store Background Classes
>>>>>>> 572231c60996fc90b383d9e646f5377504de5c39
var bgs = ['one', 'two', 'three', 'four'];
console.log(bgs);

// Random Number Generator
var max = 4;
var randNum = Math.floor( Math.random() * max);
console.log( randNum );

// Change Background Class
$('#stage').addClass( bgs[randNum] );