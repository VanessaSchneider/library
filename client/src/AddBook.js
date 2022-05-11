import { useState, useEffect } from 'react'


function AddBook ({addBookDisplay, setAddBookDisplay}) {
  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('')
  const [author, setAuthor] = useState('')
  const [addBook, setAddBook] = useState(false)
  const bookData = { name: name, author: author, photo: photo }
 

  function handleSignup (e) {
    e.preventDefault()
    fetch('/makebook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookData)
    })
      .then(r => r.json())
    //   .then(r => r.json())
    //   .then(comment => handleAddComment(comment))
    // setCommentForm(commentForm => false)
    // setContent('')
  }


   
  return (
    <div>
    <form onSubmit={handleSignup}>
      <div>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Name of the book'
        />
      </div>
      <div>
        <input
          type='text'
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder='Author name'
        />
      </div>
      <div>
        <input
          type='text'
          value={photo}
          onChange={e => setPhoto(e.target.value)}
          placeholder='Link to book cover'
        />
      </div>

      <div>
        <input type='submit' className='btn btn-outline-light'></input>
      </div>
    </form>
  </div>






  )}
export default AddBook
