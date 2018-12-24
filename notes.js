const fs = require('fs');

var fetchNotes = () => {
	try{
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (e) {
		return [];
	}
};

var saveNotes = (notes) => {
	return fs.writeFileSync('notes-data.json', JSON.stringify(notes)); // unlike append function it overwrites the whole file instead of adding at the end
};


var addNote = (title, body) => {
	
	var notes = fetchNotes();
	var note = {
		title,
		body
	};


	// returns a new array(duplicateNotes) created from all the elements that pass a certaint test performed on an original array(notes).
	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}
	
};

// we write/store string but read object


var getAll = () => {
	return fetchNotes();
};

var getNote = (title) => {
	
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title === title);
	return filteredNotes[0];

};

var removeNote = (title) => {

	var notes = fetchNotes();
	var duplicateNotes = notes.filter((note) => note.title !== title);
	saveNotes(duplicateNotes);
	
	return notes.length !== duplicateNotes.length;
};

var logNote = (note) => {
	console.log('--');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
};


module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
};