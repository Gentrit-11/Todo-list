import React from 'react'
import "../components/Todo.scss";
import { useState } from "react"

const charLimit=0;


const AddNote = ({handleAddNote}) => {
  const[noteText,setNoteText]=useState('');
  const handleChange=(event)=>{
setNoteText(event.target.value);
  };
  const handleSaveClick=()=>{
    if(noteText.trim().length>0){
      handleAddNote(noteText); // sa her shkrujm ruhet n note text 
   setNoteText(""); //e ban clear content containerin
    }
  }
    const handleclearClick=()=>{
      if(noteText.length>0){
        setNoteText("");
      }
    
       
   
  };
  return (
    <div className='note new'>
        <textarea
        rows='8'
        cols='10'
        value={noteText}
        placeholder="type to add a note.."
         onChange={handleChange}  ></textarea>
      <div className='note-content'>
        <small>{charLimit+noteText.length} chars</small>
        <button className='save' onClick={handleSaveClick}>Save</button>
        <button className='clear' onClick={handleclearClick}>cler-textarea</button>
       
      </div>
    </div>
  )
}


export default AddNote
