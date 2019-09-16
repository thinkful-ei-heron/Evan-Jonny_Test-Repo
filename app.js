let myTeam = "Evan , Jonny";
console.log(myTeam);

function yearOfBirth(age) {
    if (age < 0) {
        throw new Error("Age can not be negative");
    }
    return 2019 - age;
}

function createGreeting(name, age) {
    if (typeof age != "number" || typeof name != "string") {
        throw new Error("Arguments not valid.");
    }
    const yob = yearOfBirth(age);
    return 'Hi, my name is ' + name + ' and I\'m ' + age + ' years old.';
}

try {
    const greeting1 = createGreeting("hello", 'asd');
    console.log(greeting1);
} catch (e) {
    console.error(e);
}
function jediName(firstName, lastName) {
    return lastName.substr(0,3) + firstName.substr(0,2);
}
console.log(jediName('howey', 'davis'))
function beyond(num) {
    if(!isFinite(num)) {
        return 'And beyond';
    } else if (isFinite(num) && num > 0) {
        return 'To infinity';
    } else if (isFinite(num) && num < 0) {
        return 'To negative infinity';
    } else {
        return 'Staying home'
    }
}
console.log(beyond(0));
function decode(encoded){
    let firstChar = encoded.substr(0,1);
    if(firstChar === 'a') {
        return encoded.substr(1,1);
    } else if (firstChar === 'b'){
        return encoded.substr(2,1);
    }else if (firstChar === 'c'){
        return encoded.substr(3,1);
    }else if (firstChar === 'd') {
        return encoded.substr(4,1);
    } else {
        return ' ';
    }
}
console.log(decode('craft'),decode('block'),decode('argon'),decode('meter'),decode('bells'),decode('brown'),decode('croon'),decode('droop'))

function daysInAMonth(month) {
    switch (month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            return month + " has 31 days";
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            return month + " has 30 days";
            break;
        case 'Feburary':
            if(leapYear) {
                return month + " has 29 days";
            } else {
                return month + " has 28 days"
            }
            break;
    }
}
function daysInAMonth(month, leapYear) {
    switch (month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            return month + " has 31 days";
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            return month + " has 30 days";
            break;
        case 'Feburary':
            if(leapYear) {
                return month + " has 29 days";
            } else {
                return month + " has 28 days"
            }
            break;
    }
}
console.log(daysInAMonth("June", true));
function rockPaperScissors(num){
    if(num < 1 || num > 3) { /// Rock = 1 , Paper = 2, Scissors = 3;
        return new Error('Not between 1 and 3')
    }
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if(num === randomNo) {
        return 'Tie';
    }
    switch (num) {
        case 1:
            if(randomNo === 2) {
                return 'Computer Wins';
            } else {
                return 'Player Wins';
            }
            break;
        case 2:
            if(randomNo === 3) {
                return 'Computer Wins';
            } else {
                return 'Player Wins';
            }
            break;
        case 3:
            if(randomNo === 1) {
                return 'Computer Wins';
            } else {
                return 'Player Wins';
            }
            break;
    }
}
console.log(rockPaperScissors(3), rockPaperScissors(4),rockPaperScissors(2))