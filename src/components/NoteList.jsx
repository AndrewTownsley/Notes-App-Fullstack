import { nanoid } from "nanoid";
import Note from "./Note";


const NoteList = ({ titleState, noteTitle, notesArray, deleteNote, handleSearchNote}) => {

    return(
        <section className="notes-list-container">
            <div className="note-search">
                <label htmlFor="note-search">
                    <input 
                        onChange={(event) => handleSearchNote(event.target.value)} 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="Search Notes..."
                        />
                </label>
            </div>
            <div className="notes-list">
                {notesArray.map((note) => {
                return  <Note 
                            key={nanoid()}
                            id={note.id}
                            note={note}
                            noteTitle={noteTitle}
                            titleState={titleState}
                            title={note.title}
                            text={note.text}
                            deleteNote={deleteNote}
                        />
                })}
            </div>
        </section>
    )
}

export default NoteList;