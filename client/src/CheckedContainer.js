import { Link, useHistory } from 'react-router-dom'


function CheckedContainer({book}) {





  return (
   <div className = "centered2">
       {book.name}
       {book.author}
       <img img className='book-size' src={book.photo}></img>
   </div>
  )
}
export default CheckedContainer
