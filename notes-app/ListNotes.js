const fs = require('fs')
const chalk = require('chalk')

// Get all the notes
const getNotes = function () {
    const notes = loadNotes()

    console.log(chalk.black.bgRedBright('Your notes...'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

// Load all the notes
const loadNotes = () => {
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
}