//This function takes a string and returns its first character.

function firstCharacter(word) {
    return word[0];
}

//This function takes a string and returns its last character. 

function lastCharacter(word) {
    return word [ word.length - 1 ];
}

//This function takes a string and a number, and returns the character at the position represented by the number

function letterPosition (word, num) {
    return word[num];
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

function mathIsFun(word, num1, num2) {
    if (word === "add") {
        return num1 + num2;
    } else if (word === "subtract") {
        return num1 - num2;
    } else if (word === "mult") {
        return num1 * num2;
    } else if (word === "div") {
        return num1 / num2;
    } else {
        return 0;
    }
}

//This function takes a string and a number, and returns the string repeated that many number of times.

function multiplyString(word, num) {
    var a = "";
    while (num > 0) {
        a = a + word + " ";
        num = num - 1;
    }
    return a;
} 

//This function takes a string and returns the reverse of that string.

function reverse(word) {
    var a = "";
    var b = word.length - 1;
    while (b >= 0) {
        a = a + word[b];
        b = b - 1;
    }
    return a;
}

//This function takes a number and returns the factorial of a number. It doesn't work on negative numbers though.

function factorial (num) {
    if (num === 1 || num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

//This function takes a phrase as a string and returns the longest word in that phrase. 
//If the phrase contains more than one such word, it will return the first occurrence.

function longWord(sentence) {
    var split = sentence.split(" ");
    var letterCount = 0;
    var longestWord = "";
    for (var i = 0; i < split.length; i++ ) {
        if (split[i].length > letterCount) {
            letterCount = split[i].length;
            longestWord = split[i];
        }
    }
    return longestWord;
}

//This function takes a phrase and returns the same phrase with every word capitalized.

function cap(sentence) {
    var split = sentence.split(" ");
    var capSentence = ""
    var capWord = ""
    for (var i = 0; i < split.length; i++ ) {
        capWord = split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase();
        capSentence = capSentence + " " + capWord
    }
    return capSentence
}

//This function takes an array and returns the largest number of the array. 

function largestNum(nums) {
    var bigNum = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > bigNum) {
            bigNum = nums[i]
        }
    }
    return bigNum
}

//This function takes an array and returns a filtered array.

function filtered(someStuff) {
    return someStuff.filter(Boolean);
}

//This function takes an array of numbers and returns the sum of all the numbers in the array.

function sumOfNums(nums) {
    var sum = 0
    for (var i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum;
}

//This function takes two arrays and returns an array of all elements that are only in one array. 

function uniqueElements(group1, group2) {
    var unique = [];
    for (var i = 0; i < group1.length; i++) {
        if (group2.indexOf(group1[i]) === -1) {
            unique.push(group1[i]);
        } 
    }
    for (var i = 0; i < group2.length; i++) {
        if (group1.indexOf(group2[i]) === -1) {
            unique.push(group2[i]);
        }
    }
    return unique;
}

//This function takes an array and a function as arguments. 
//The function returns a new array that maps every element of the input array by passing it through the function.

function mapElements(elements, mapFunction) {
    var newElements = [];
    for (var i = 0; i < elements.length; i++) {
        var temp = mapFunction(elements[i]);
        newElements.push(temp);
    }
    return newElements;
}
