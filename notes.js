const fs = require('fs')

 const getNote = function (){
    return 'Your Notes....'
 }
 const addNote = function (title,body){

    const notes = loadNote()
    const duplicateNotes = notes.filter(function (notes){
        return notes.title === title
    })

     if(duplicateNotes.length===0){
         notes.push({
             title: title,
             body: body
         })
         saveNote(notes)
         console.log('New Note Added !!')
     }else{
         console.log('Already Exist !!')
     }

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