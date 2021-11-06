import { nanoid } from "nanoid";
import { GiHamburgerMenu } from 'react-icons/gi'
import Note from "./Note";



const NoteList = ({ titleState, notesArray, deleteNote, handleSearchNote, handleCategorySort, savePinnedNote, openMenu, open, setOpen }) => {

    return(
        <section className="notes-list-container">
            <div className="note-search">
                <div className="note-search-container">
                    <GiHamburgerMenu 
                        onClick={ !open ? () => setOpen(true) : () => setOpen(false)}
                        open={open}
                        className="burger-icon"
                    />
                    <input 
                        className="note-search-input"
                        onChange={(event) => handleSearchNote(event.target.value)} 
                        type="text" 
                        name="search" 
                        id="note-search" 
                        placeholder="Search Notes..."
                        />
                
                    <select onChange={handleCategorySort} className="note-search-category note-input-select" name="category-sort" id="category-sort">
                        <option value="">Category</option>
                        <option value="">All</option>
                        <option value="Important">Important !</option>
                        <option value="Work">Work</option>
                        <option value="School">School</option>
                        <option value="Home">Home</option>
                        <option value="Personal">Personal</option>
                    </select>
                </div>
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
                        />
                })}
            </div>
        </section>
    )
}

export default NoteList;

                    