//This function takes a string and returns its first character.

function firstCharacter(string) {
    return string[0];
}

//This function takes a string and returns its last character. 

function lastCharacter(string) {
    return string [ string.length - 1 ];
}

//This function takes a string and a number, and returns the character at the position represented by the number

function letterPosition (string, num) {
    return string[num];
}

//This function takes two numbers and adds them together.
//This function also appears to add whatever we pass as arguments. For instance, it takes two string and makes one: ("hello", "world") makes "helloworld".
//It also adds arguments that are not of the same kind. ex: ("", 67) makes "67"; (true, 90) makes 91; (false, "bacon") makes "falsebacon".
function addNum (num1, num2) {
    return num1 + num2;
}

//This function takes two numbers and multiplies them together.
//The function returns NaN when a string is passed as argument. True takes a value of 1 and both false and the empty array take a value of 0.

function multiply(num1, num2) {
    return num1*num2;
}

/* This function takes two numbers and a string. If the string is ‘add’, it returns the sum of the numbers. If the string is ‘subtract’, it returns
the difference. If the string is ‘mult’, it returns the product. If the string is ‘div’, it returns the ratio. Otherwise it returns 0.
*/

function mathIsFun(string, num1, num2) {
    if (string === "add") {
        return num1 + num2;
    } else if (string === "subtract") {
        return num1 - num2;
    } else if (string === "mult") {
        return num1 * num2;
    } else if (string === "div") {
        return num1 / num2;
    } else {
        return 0;
    }
}

//This function takes a string and a number, and returns the string repeated that many number of times.

function multiplyString(string, num) {
    var a = "";
    while (num > 0) {
        a = a + string + " ";
        num = num - 1;
    }
    return a;
} 


