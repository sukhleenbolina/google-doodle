console.log('OK');

var bgs = ['one', 'two', 'three', 'four'];
console.log(bgs);

// Random Number Generator
var max = 4;
var randNum = Math.floor( Math.random() * max);
console.log( randNum );

// Change Background Class
$('#stage').addClass( bgs[randNum] );