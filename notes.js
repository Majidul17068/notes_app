const fs = require('fs')

 const getNote = function (){
    return 'Your Notes....'
 }
 const addNote = function (title,body){

    const notes = loadNote()
    notes.push({
        title: title,
        body: body
    })
     saveNote(notes)



 }
 const saveNote = function (notes){
    const dataJSN = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSN)
 }
 const loadNote = function (){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSN = dataBuffer.toString()
        return JSON.parse(dataJSN)

    }catch (e){
        return []

    }



 }
 module.exports = {
    getNote: getNote,
     addNote: addNote
 }