/*eslint-env browser*/
//STEP 1
function halfNumber (val) {
    "use strict";
    return (Number(val)/2);
}

//STEP 2
function squareNumber (val) {
    "use strict";
    var num = Number(val);
    return num * num;
}

//STEP 3
function percentOf (val1, val2) {
    "use strict";
    return (Number(val1) / Number(val2)) * 100;
}

//STEP 4
function findModulus (val1, val2) {
    "use strict";
    return (Number(val2) % Number(val1));
}

// TEST
var num1, num2, num3;

num1 = 9;
window.console.log("Half of " + num1 + " is " + halfNumber(num1) + ".");

window.console.log("The result of squaring the number " + num1 + " is " + squareNumber(num1) + ".");

num2 = 36;
window.console.log(num1 + " is " + percentOf(num1, num2) + "% of " + num2 + ".");

num3 = 25;
window.console.log(findModulus(num1, num3) + " is the modulus of " + num1 + " and " + num3 + ".");