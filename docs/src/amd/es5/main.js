// src/amd/es5/main.js
requirejs(['multiplyBy2', 'sumFour'], function(multiplyBy2, sumFour) {
    let result1 = multiplyBy2( 4 );
    console.log( 'ECMAScript 5 / AMD:', result1 );
    let result2 = sumFour( 3 );
    console.log( 'ECMAScript 5 / AMD:', result2 );
});
