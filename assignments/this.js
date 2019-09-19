/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - unless you use strict or one of the other rules "this" defaults to the window object or the global object in Node.
* 2. Implicit Binding - when the function is invoked "this" refers to what's left of the dot.
* 3. New Binding - using the new keyword constructs a new object and "this" points to it.
* 4. Explicit Binding - you can tell the javascript engine to set "this" to point to a certain value using call, appl, or bind.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function dog(){
    console.log(this.woof);
}

const woof = 'WOOF!';
dog();

// Principle 2

// code example for Implicit Binding

let myCat = {
    name: 'Nidalee',
    meow: 'MEEEOW',
    cat: function(){
        console.log(this.meow);
    }
}

myCat.cat();

// Principle 3

// code example for New Binding

function Cat(doing){
    this.thing = doing;
}
let mySillyCat = new Cat('Nidalee is sleeping');
console.log(mySillyCat.thing);

// Principle 4

// code example for Explicit Binding

function cat(){
    console.log(this.meow)
}

let myLoudCat = {
    name: 'Nidalee',
    meow: 'MEEEOW',    
}

cat.call(myLoudCat);