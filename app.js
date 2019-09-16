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

