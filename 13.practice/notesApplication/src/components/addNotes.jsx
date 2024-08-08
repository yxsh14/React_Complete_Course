import React, { useState } from 'react';

function AddNotes({ notes, setNotes }) {
    const [note, setNote] = useState('');

    const saveNote = (e) => {
        e.preventDefault();
        if (note.length) {
            setNotes([...notes, note]); // Use setNotes to update the notes array
            setNote('');
        }
    };

    return (
        <div>
            <form onSubmit={saveNote}>
                <input
                    type='text'
                    label='note'
                    value={note} // Bind input value to note state
                    onChange={(e) => setNote(e.target.value)}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddNotes;
