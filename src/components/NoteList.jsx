import { nanoid } from "nanoid";
import Note from "./Note";
import PinnedNotes from "./PinnedNotes";
import React, { useState, useEffect } from 'react';



const NoteList = ({ titleState, notesArray, deleteNote, handleSearchNote, savePinnedNote, createNote, pinnedNotesArray, setPinnedNotesArray }) => {
    const [pinNote, setPinNote] = useState(false);

    return(
        <section className="notes-list-container">
            <div className="note-search">
                <label htmlFor="note-search">
                    <input 
                        onChange={(event) => handleSearchNote(event.target.value)} 
                        type="text" 
                        name="search" 
                        id="note-search" 
                        placeholder="Search Notes..."
                        />
                </label>
                <label htmlFor="category-sort">
                    <select className="note-input-select" name="category-sort" id="category-sort">
                        <option value="">Category</option>
                        <option value="Important">Important !</option>
                        <option value="Work">Work</option>
                        <option value="School">School</option>
                        <option value="Home">Home</option>
                        <option value="Personal">Personal</option>
                    </select>
                </label>
            </div>

            <div className="pinned-notes-container">
            </div>
            <div className="notes-list">
                {notesArray.map((note) => {
                return  <Note 
                            key={nanoid()}
                            id={note.id}
                            note={note}
                            noteTitle={note.noteTitle}
                            titleState={titleState}
                            title={note.title}
                            category={note.category}
                            text={note.text}
                            deleteNote={deleteNote}
                            savePinnedNote={savePinnedNote}
                            setPinNote={setPinNote}
                            // handlePinNote={handlePinNote}
                        />
                })}
            </div>
        </section>
    )
}

export default NoteList;

      /* {  pinnedNotesArray.map((note) => {
                    return <Note 
                                key={nanoid()}
                                id={note.id}
                                note={note}
                                noteTitle={note.noteTitle}
                                titleState={titleState}
                                title={note.title}
                                category={note.category}
                                text={note.text}
                                deleteNote={deleteNote}
                                savePinnedNote={savePinnedNote}
                                setPinNote={setPinNote}
                                // handlePinNote={handlePinNote}
                            />
                        })*/
                    