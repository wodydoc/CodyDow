
'use strict';



var b = 1;
var a = 0;
var limit = 30; 

// console.log(a);


// while(a <= limit) {
//     console.log(a);
//     var temp = a + b; 
//     a = b; 
//     b = temp;

// };

// ------
// for (var i = 0; i <= limit; i++)

for (var a = 0; a <= limit; a++) {
    console.log(a);
    var temp = a + b;
    a = b;
    b = temp; 

};