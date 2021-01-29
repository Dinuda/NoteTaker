const fs = require('fs')
const { normalize } = require('path')
const { brotliCompress } = require('zlib')

const getNotes = function () {
    return "Your notes ..."
}

// Add a note
const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!');
    } else {
        console.log('Note title taken');
    }

}

// Save Notes
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Load all the notes
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

// Export the functions to the main file(app.js)
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}