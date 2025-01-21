// primitives

console.log('fire')
console.log(23)
let x = null;
console.log(x)

console.log(typeof function(){});

var y = {}; // define

y['foo'] = 'bar' // mutate 

console.log(y)

// if not primitatives then object

var foo = Boolean(false)

// control flow 

var truthy; 

if (truthy) {
    // do this    
} else if (truthy == null) {
    // do that
} else {
    // do something else
}

console.log(!! '')
console.log(!! 'hi')
console.log(!! 0)
console.log(!! -1)

// var z = true || false;
// var z = true && false;

var z = "23" === 23; 

console.log(z)

// Ternary

var a = truthy ? 1 : 2;

// switch 

var expression = 'dog';

switch (expression) {
    case 'dog':
        console.log('is a dog')
        break; 
    
    case 'cat':
        console.log('is a cat')
        break;
}

// try and catch

try {
    console.log('works')
} catch (error) {
    console.log('does not work')
} finally {
    console.log('always works')
}

// variables 

var g = 'global';

function app(){
    var l = 'local';
    console.log(g);
    console.log(l);
}

// console.log(l); -> gives error cuz local
app();

// Hoisting -> applies to variables but function declaration as well..

var e; 
console.log(e);

let num = 1; // value can be changed 
num = 2; // also this 
const some = 11; // a constant 

if (true) {
    // block 
    const x = 23; 

}

// Functions: A piece of code that simply takes input and produces an output when its called.

function hello(input) {
    const output = input + 'me'; 
    return output
}

console.log(hello('Hi Vasant'));

// arrow function
const somehello = (input) => output 

// anonymous function 

(function () {
    console.log('hello world')
})

// Not anonymouse -> SomeName

function somename() {
    console.log('hello world')
}

// Higher order functions 

function cool(fun) {
    fun(); // another function
}

cool(() => console.log('sweet!'))

// function nesting -> closures

// function outer() {

//     function inner() {
//         console.log('inner')
//     }
// }

// closure: A function in a function

function outer() {

    const fish = 'Garb';
    let count = 0;

    function inner() {
        count++;
        return `${count} ${fish}`
    }

    return inner 
}

const fun = outer();

console.log(fun());
console.log(fun());
console.log(fun());

// Objects: A datastructure that allows us to store Key:value pairs 
// Objects are mutable by default
// Objects are passed by reference

const obj1 = new Object();

obj1.name = 'Clown';
obj1.age = 20;

// obj literal syntax: 

const obj = {
    name: 'Clown',
    age: 20,
    hello : function() {
        console.log(`hello ${this.name}`)
    },

    hello2: () => {
        console.log(this)
    }
}

obj.hello()
obj.hello2() // void