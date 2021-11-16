import React, { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import "./App.css";
import NoteList from './components/NoteList';
import SideBar from './components/SideBar';


function App() {
  const [noteText, setNoteText] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [titleState, setTitleState] = useState(true);
  const [category, setCategory] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [searchText, setSearchText] = useState('');
  const [open, setOpen] = useState(false);
  const [notesArray, setNotesArray] = useState([])
  // const [notesArray, setNotesArray] = useState(() => {
  //   const savedNotes = localStorage.getItem("notes-app-data");
  //   const initialValue = JSON.parse(savedNotes);
  //   return initialValue || [];
  // });
  const characterLimit = 200;

  // const API_BASE = 'http://localhost:3001';

  useEffect(() => {
    getNotes();
  }, [])
  
  const getNotes = async () => {
    const data = await fetch('/notes');
    const items = await data.json();
    setNotesArray(items)
  }

const createNote = () => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    title: noteTitle,
    text: noteText,
    category: category,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notesArray, newNote]
  setNotesArray(newNotes);
}

// const getNotes = () => {
//   fetch(API_BASE + '/notes')
//   .then(result => result.json())
//   .then(data => setNotesArray(data))
//   .catch(error => console.log("Error:", error));
//   console.log("getNotes Notes Array: ", notesArray);
// }

const saveNote  = async () => {
  if(noteText.trim().length > 0) {
    const date = new Date();
    const data = await fetch(API_BASE + "/note/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        id: nanoid(),
        title: noteTitle,
        text: noteText,
        category: category,
        date: date.toLocaleDateString()
      })
    }).then(res => res.json());
    console.log("NOTE HAS BEEN SAVED !!");
    createNote(noteText);
    setNotesArray([...notesArray, data])
    setNoteText('');
    setNoteTitle('');
    console.log("Data: ", data);
  }
  }

const deleteNote = async (id) => {
  const data = await fetch(API_BASE + "/note/delete/" + id, {
    method: "DELETE"
  }).then(res => res.json());
  console.log("Delete DATA: ", data);
  
  
  setNotesArray(notesArray => notesArray.filter(note => note._id !== data._id));
  // getNotes();
  console.log("DATA: ", data);
  console.log("Delete notesArray", notesArray);
  console.log("NOTE HAS BEEN DELETED!!!!!!!!")
}


const handleTitleChange = (event) => {
  if(event.target.value.length >= 0) {
    setNoteTitle(event.target.value);
    setTitleState(true);
  }
}

// Write a function that sets the value of the textarea as the noteText, 
// if the event.target.value.length >= 0.
const handleTextChange = (event) => {
  if(characterLimit - event.target.value.length >= 0) {
    setNoteText(event.target.value)
  }
  }
  
  // Write a function that calls the createNote() function, with noteText passed in as a parameter.
  // Then set the value of the noteText from the textarea to be BLANK, so that a new note can be created. 
// const saveNote = () => {
//     if(noteText.trim().length > 0) {
//       createNote(noteText);
//       setNoteText('');
//       setNoteTitle('');
//     }
// }

const completeNote = async (id) => {
  const data = await fetch(API_BASE + "/note/complete/" + id)
  .then(res => res.json());
  
  setNotesArray(notesArray => notesArray.map(note => {
    if(note._id === data._id) {
      note.complete = data.complete
    }
    return note
  }));
}


const handleCategorySort = (e) => {
  setFilterCategory(e.target.value);
}

  return (
    <div className="App">
        <SideBar 
          handleTextChange={handleTextChange}
          handleTitleChange={handleTitleChange}
          noteTitle={noteTitle}
          setTitleState={setTitleState}
          titleState={titleState}
          noteText={noteText}
          setCategory={setCategory}
          saveNote={saveNote}
          notesArray={notesArray}
          deleteNote={deleteNote}
          open={open}
        />
        <NoteList 
          notesArray={
            filterCategory === "" ? notesArray.filter(note => note.text.toLowerCase().includes(searchText)) 
            :
            notesArray.filter(note => note.text.toLowerCase().includes(searchText)) &&
            notesArray.filter(note => note.category === filterCategory)
          }
          createNote={createNote}
          saveNote={saveNote}
          deleteNote={deleteNote} 
          handleSearchNote={setSearchText}
          handleCategorySort={handleCategorySort}
          category={category}
          open={open}
          setOpen={setOpen} 
          completeNote={completeNote}
          // completeNoteStyle={completeNoteStyle}
          // setCompleteNoteStyle={setCompleteNoteStyle}
        />  
    </div>
  );
}

export default App;
