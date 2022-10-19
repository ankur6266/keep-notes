import React, { useState } from 'react'

export default function CreateNote(props) {

  const [note, setNote] = useState({
    title: "",
    tagline: "Tagline",
    content: ""
  })

  const handleUpdate = (event) => {
    const {name, value} = event.target;
    
    setNote(prevNote => {
      return {
        ...prevNote, 
        [name]: value
      }
    })
  }

  const submitNote = (event) => {
    if (note.title.length === 0 || note.content.length === 0){
      document.getElementById('addWarning').style.visibility = 'visible'
    }
    else{
      props.onAddNote(note);  
      event.preventDefault();
      document.getElementById('addWarning').style.visibility = 'hidden';
      setNote({
        title: "",
        tagline: 'Tagline',
        content: ""
      })
    }


  }
  return (
    <div className='createNote'>
        <form>
            <input name='title' value={note.title} onChange={handleUpdate} placeholder='Title' required />
            <input name='tagline' value={note.tagline} onChange={handleUpdate} placeholder='Add tagline' />
            <textarea name='content' value={note.content} onChange={handleUpdate} placeholder='Write Note ...' rows='3' required/>
            <p id='addWarning'>Compulsory to add 'Title' and 'Content'.</p>
            <button className='add_btn' onClick={submitNote}>Add</button>
        </form>
    </div>
  )
}
