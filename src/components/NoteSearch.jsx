import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'


const NoteSearch = ({ open, setOpen, handleSearchNote, handleCategorySort}) => {
    return (
        <div className="note-search">
        <div className="note-search-container">
            <div className="note-search-mobile-header">
                <GiHamburgerMenu 
                    onClick={ !open ? () => setOpen(true) : () => setOpen(false)}
                    open={open}
                    className="burger-icon"
                />
                <h1>noteflix</h1>
            </div>
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
    )
}

export default NoteSearch
