import React, { useEffect, useState } from 'react'
import Note from './components/Note'
import noteService from './services/notes'
import Notification from './components/Notification'
import Footer from './components/Footer'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    console.log('effect');
    noteService
      .getAll()
      .then((initialNotes) => {
        console.log('promise fulfilled');
        setNotes(initialNotes)
      })
  }, [])
  console.log('render', notes.length, 'notes');
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() > 0.5,
    }

    noteService
      .create(noteObject)
      .then((returnedNote) => {
        setNotes(notes.concat(returnedNote));
        setNewNote('');
      });
  };

  const toggleImportanceOf = (id) => {
    // const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };
    // console.log(`importance of ${id} needs to be toggled`);

    noteService
    .update(id, changedNote)
    .then((returnedNote) => {
      setNotes(notes.map((note) => note.id !== id ? note : returnedNote));
    })
    .catch((error) => {
      setErrorMessage(
        `Note '${note.content}' was already removed from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
      setNotes(notes.filter((n) => n.id !== id));
    });
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  // const notesList = notes.map((note) => {
  //   return <Note key={note.id} note={note} />
  // })

  const notesToShowList = notesToShow.map((note) => {
    return (
      <Note
       key={note.id} 
       note={note}
       toggleImportance={() => toggleImportanceOf(note.id)}
      />
    );
  });

  return (
    <div>
      <h1>Notes</h1>
      <Notification
      message={errorMessage}
      />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShowList}
      </ul>
      <form onSubmit={addNote}>
        <input
        value={newNote}
        onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  );
};

export default App