console.log('Starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')
const _ = require('lodash')

// var res = notes.add();

console.log("result : " + notes.add(7,5));

// fs.appendFile('greetings.txt','hello world ' + user.username + ' !!',function (err) {
//     if (err){
//         console.log("Unable to write to file");
//     }
// });

