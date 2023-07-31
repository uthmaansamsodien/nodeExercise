const fs = require('fs')

// first content
// fs.writeFileSync('./data.txt', 'Hello Ladies')

// second content
// fs.writeFileSync('./data.txt', 'How are you')
// it replaces the initial data instead of adding to it

// console.log(fs.readFileSync('./data.txt', 'utf-8'));

// append new content
// fs.appendFileSync('./data.txt', '\nMy name is Uthmaan')

// content is added in a new line, use \n to add to a new line

const Person = require('./person.js');

const person1 = new Person('Mish-Al', 'Taliep', 'mtaliep.lifechoices@gmail.com')
const person2 = new Person('Jason', 'Barron', 'jbarron.lifechoices@gmail.com')
const person3 = new Person('Imtiyaaz', 'Damon', 'idamon.lifechoices@gmail.com')

console.log(person1);
console.log(person2);
console.log(person3);


