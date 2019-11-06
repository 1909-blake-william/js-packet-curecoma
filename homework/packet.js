function fib(n) {
    let now = 1;
    let last = 0;
    for (let i = 1; i < n; i++) {
        now = now + last;
        last = now - last;
    }
    return now;
}

function bubbleSort(numArray) {
    let j = 0;
    let isSorted = false;
    let counter = 1;
    do {
        isSorted = true;
        for (let i = 0; i < numArray.length - counter; i++) {
            if (numArray[i] > numArray[i + 1]) {
                j = numArray[i];
                numArray[i] = numArray[i + 1];
                numArray[i + 1] = j;
                isSorted = false;
            }
        }

    } while (isSorted === false)

    return numArray;
}

function reverseStr(someStr) {
    let soln = "";
    for (let i = 0; i < someStr.length; i++) {
        soln = someStr.charAt(i) + soln;
    }
    return soln
}

function factorial(someNum) {// not working, check later
    let soln = 1;
    let i = 1;
    for (i; i <= someNum; i++) {
        soln = soln * i;
    }
    return soln;
}

function substring(someStr, length, offset) {
    if (length + offset > someStr.length) {
        alert("Hey, you're required conditions go beyond the last letter of the given string.");
        return null;
    }
    let soln = "";
    for (let i = offset; i < offset + length; i++) {
        soln = soln + someStr.charAt(i);
    }
    return soln
}

function isEven(someNum) {
    if (Math.ceil(someNum / 2) === someNum / 2) {
        return true;
    }
    return false;
}

function isPalindrome(someStr) {
    someStr = someStr.toUpperCase
    for (let i = 0; i < someStr.length / 2; i++) {
        if (someStr.charAt(someStr.length - 1 - i) !== someStr.charAt(i)) { return false; }
    }
    return true;
}

function printShape(shape, height, character) {
    let str = '';
    if (shape === 'Square') {
        for (let i = 0; i < height; i++) {
            str = str + character;
        }
        for (let i = 0; i < height; i++) {
            console.log(str);
        }
    }
    if (shape === 'Diamond') {
        let holder = '';
        let pc = 0;
        let pivot = [];
        if (height % 2 === 1) {
            pivot.push(height / 2 + 0.5);
            pc = 1;
        } else {
            pivot.push(height / 2, height / 2 + 1);
            pc = 2;
        }
        for (let i = 0; i < height; i++) {
            str = holder;
            for (let j = 1; j <= height; j++) {
                if (pivot.includes(j)) {
                    str = str + character;
                } else {
                    str = str + ' ';
                }
            }
            if (pc === 0) {
                pivot.pop();
                pivot.pop();
            } else if (Math.max(...pivot) < height) {
                pivot.push(Math.max(...pivot) + 1, Math.min(...pivot) - 1) //spread operators
            }

            if (Math.max(...pivot) === height) {
                pc = pc - 1;
            }

            console.log(str);
        }
    }
    if (shape === 'Triangle') {
        for (let i = 0; i < height; i++) {
            str = str + character;
            console.log(str);
        }
    }
}

function traverseObject(someObj) {
    for (let propertyName in someObj) {
        propertyValue = someObj[propertyName]
        console.log(propertyName + ': ' + propertyValue);
    }
}

function deleteElement(someArr) {
    console.log(someArr.length);
    someArr[2] = null;
    console.log(someArr.length);
}

function spliceElement(someArr) {
    console.log(someArr.length);
    someArr.splice(2, 1)
    console.log(someArr.length);
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

function getPerson(name, age) {
    let p = {
        "name": name,
        "age": age,
    };
    return p;
}