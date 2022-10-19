import React ,{ useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Note from "./components/note";
// import notes from "./add notes";
import CreateNote from "./components/CreateNote";
function App() {

  const [notes, setNotes] = useState([])

  const addNote = (newNote) => {
    setNotes(prevNote => {
      return [...prevNote, newNote];
    })
  }

  const deleteNote = (id) => {
    setNotes(prevNote => {
      return prevNote.filter((currentNote, index) => {
        return id !== index;
      }) 
    })
  }

  return (
    <div>
      <Header />
      <CreateNote 
        onAddNote = {addNote }
      />
      <div className="noteContainer">
      {notes.map( (new_note, index) => (
        <Note
          key = {index}
          id = {index}
          title = {new_note.title}
          tagline = {new_note.tagline}
          content = {new_note.content}
          onDeleteNote = {deleteNote}
        />
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
