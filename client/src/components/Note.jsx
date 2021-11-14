import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { RiCheckLine } from 'react-icons/ri';


const Note = ({ note, deleteNote, completeNote }) => {
  const [completeNoteStyle, setCompleteNoteStyle] = useState(false);


console.log(completeNoteStyle);

    return (
          <article className={ !completeNoteStyle ? 'note' : 'note note-complete'} id={note._id}>  
            <div className="note-header">
              <div className="note-header-title">
                <h5 className={note.category}>{note.category}</h5>
                <h3>{note.title}</h3>
                {/* <h3>{note.title.substring(0,30)}</h3> */}
              </div>
              <div onClick={ !completeNoteStyle ? () => setCompleteNoteStyle(true) : () => setCompleteNoteStyle(false)} className="complete-contaner">
                <RiCheckLine style={{color: "#3cc47c"}}
                  onClick={() => completeNote(note._id)} className="pin-icon"/>
              </div>
            </div>
            <p>{note.text}</p>
            {/* <p>{note.text.substring(0, 50)}</p> */}
            <div className="note-footer">
              <p>{note.date}</p>
              <MdDeleteForever className="delete-btn" onClick={() => deleteNote(note._id)}/>
            </div>
          </article>
        )
    }
      
         


export default Note;



