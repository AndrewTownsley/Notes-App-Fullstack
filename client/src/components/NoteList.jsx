import { nanoid } from "nanoid";
import Note from "./Note";
import NoteSearch from "./NoteSearch";


const NoteList = ({ notesArray, deleteNote, handleSearchNote, handleCategorySort, open, setOpen, completeNote, completeNoteStyle, setCompleteNoteStyle }) => {

    return(
        <section className="notes-list-container" onClick={ open ? () => setOpen(false) : null}
        open={open}>
            <NoteSearch
                open={open}
                setOpen={setOpen}
                handleSearchNote={handleSearchNote}
                handleCategorySort={handleCategorySort}
            />

            <div className="pinned-notes-container">
            </div>
            <div className="notes-list">
                {notesArray.map((note) => {
                return  <Note 
                            key={nanoid()}
                            id={note.id}
                            note={note}
                            noteTitle={note.noteTitle}
                            title={note.title}
                            category={note.category}
                            text={note.text}
                            deleteNote={deleteNote}
                            completeNote={completeNote}
                            completeNoteStyle={completeNoteStyle}
                            setCompleteNoteStyle={setCompleteNoteStyle}
                        />
                })}
            </div>
        </section>
    )
}

export default NoteList;

                    