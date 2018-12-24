// var obj = {
// 	name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj)

// var personString = '{"name": "Rohan", "age": 25}';
// var person = JSON.parse(personString);
// console.log(typeof person)
// console.log(person)

const fs = require('fs');

var OriginalNote = {
	title: 'Some title',
	body: 'Some body' 
};

var originalNoteString = JSON.stringify(OriginalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString  = fs.readFileSync('notes.json');
note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);

