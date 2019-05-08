console.log('OK');



var bgs = ['one', 'two', 'three', 'four'];
console.log(bgs);


var max = 4;
var randNum = Math.floor( Math.random() * max);
console.log( randNum );


$('#stage').addClass( bgs[randNum] );