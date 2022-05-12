import { useState } from 'react'
import {useHistory } from 'react-router-dom'


function AddBook ({addBookDisplay, setAddBookDisplay}) {
  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('')
  const [author, setAuthor] = useState('')
  const [addBook, setAddBook] = useState(false)
  const bookData = { name: name, author: author, photo: photo }
  const history = useHistory()
 

  const handleReroute = () => {
    console.log('Reroute!')
    history.push('/') 
  }

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
    .then(data => console.log(data))
    // setCommentForm(commentForm => false)
    // setContent('')
    alert('You have added the book to our, now you can make a post')
   handleReroute()
  }


   
  return (
<div>
    <div className = "add-book1">
    <h3>Don't see the book you want to discuss, add it to our list</h3>
    </div>
    <div className = "add-book">
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
  </div>





  )}
export default AddBook
