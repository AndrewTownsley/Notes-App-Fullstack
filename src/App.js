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
  const [pinnedNotesArray, setPinnedNotesArray] = useState([0])
  const [notesArray, setNotesArray] = useState(() => {
    const savedNotes = localStorage.getItem("notes-app-data");
    const initialValue = JSON.parse(savedNotes);
    return initialValue || [];
  });
  const characterLimit = 200;

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
const saveNote = () => {
    if(noteText.trim().length > 0) {
      createNote(noteText);
      setNoteText('');
      setNoteTitle('');
    }
}

const deleteNote = (id) => {
  const newNotes = notesArray.filter((note) => note.id !== id)
  setNotesArray(newNotes);
}

const handleCategorySort = (e) => {
  console.log(e.target.value);
  setFilterCategory(e.target.value);
}



useEffect(() => {
  localStorage.setItem("notes-app-data", JSON.stringify(notesArray))
}, [notesArray])

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
          // savePinnedNote={savePinnedNote}
          deleteNote={deleteNote} 
          handleSearchNote={setSearchText}
          handleCategorySort={handleCategorySort}
          titleState={titleState}
          category={category}
          pinnedNotesArray={pinnedNotesArray}
          setPinnedNotesArray={setPinnedNotesArray}
        />  
    </div>
  );
}

export default App;
