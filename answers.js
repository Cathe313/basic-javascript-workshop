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

