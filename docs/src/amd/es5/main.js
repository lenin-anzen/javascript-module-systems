// src/amd/es5/main.js
requirejs(["multiplyBy2", "sumFour"], function(multiplyBy2, sumFour) {
    var result1 = multiplyBy2( 4 );
    console.log( 'ECMAScript 5 / AMD:', result1 );
    var result2 = sumFour( 3 );
    console.log( 'ECMAScript 5 / AMD:', result2 );
});
