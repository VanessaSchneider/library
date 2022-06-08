import { Link, useHistory } from 'react-router-dom'

function BookContainer ({ book }) {
  return (
    <div className='catTile'>
      <div className='centered'>
        <Link to={`/books/${book.name}`}>{book.name}</Link>
        <br></br>
        {book.author}
        <img img className='book-size' src={book.photo}></img>
      </div>
    </div>
  )
}
export default BookContainer
