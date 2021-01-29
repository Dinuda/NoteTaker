const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk');
const { argv } = require('yargs');

const addNotes = require('./Addnote.js')
const removeNotes = require('./Removenote.js')
const listNotes = require('./ListNotes.js')
const readNotes = require('./ReadNote')

// Customize yargs version
yargs.version('1.1.0')

// add, remove, read, list notes
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        addNotes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        removeNotes.removeNote(argv.title)
    }
})

// Show notes list
yargs.command({
    command: 'list',
    description: 'List your notes',
    handler: function () {
        listNotes.getNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        readNotes.readNote(argv.title)
    }
})


console.log(yargs.argv);