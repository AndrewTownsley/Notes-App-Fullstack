
const NoteInput = ({ handleTextChange, noteText, saveNote}) => {

    return (
        <div className="note-input">
        <div className="note-input-container">
        <h3>Create Note</h3>
          <textarea 
            onChange={handleTextChange}
            value={noteText} 
            rows="6" cols="20" 
            placeholder="Enter note here..." 
            name="note" 
            id="note-input" >
            </textarea>
          <div className="note-input-footer">
            <small>chars remaining</small>
            <button onClick={saveNote} className="save-btn">Save</button>
          </div>
        </div>
      </div>
    )
}

export default NoteInput;