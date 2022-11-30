//const log = console.log;
const chalk = require('chalk');
const validator = require('validator')
//const getNotes = require('./notes')
const note = require('./notes.js')
const yargs= require('yargs')

yargs.version('1.0.1')
//console.log(getNote)
// const msg = getNote
// console.log(msg)
// const greenMsg = chalk.bold.inverse.redBright('Success !')
// console.log(greenMsg)
// //console.log(validator.isURL('mislam@Tulip-tech.com'))
//console.log(process.argv[2])

yargs.command({
    command: 'add',
    describe: 'add a new note book',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        },
        body:{
            describe:'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler :function (argv){

        note.addNote(argv.title, argv.body)

        // console.log('Title: '+ argv.title)
        // console.log('body: '+ argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing note',
    handler : function () {
        console.log('removing notes !!')
    }
})
yargs.command({
    command: 'list',
    describe: 'list note',
    handler : function () {
        console.log('listing notes.....')
    }
})

yargs.command({
    command: 'read',
    describe: 'reading note',
    handler : function () {
        console.log('reading notes....')
    }
})


yargs.parse()



const command = process.argv[2]
//console.log(yargs.argv)
if (command === 'add'){
    //console.log('Adding Notes: ')
}else if (command ==='remove'){
    console.log('Removing Notes: ')
}

