const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    const notes = loadNotes()

    console.log(chalk.black.bgRedBright('Your notes...'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
}