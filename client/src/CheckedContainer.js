import { Link, useHistory } from 'react-router-dom'


function CheckedContainer({book}) {


function returnBook(){
    fetch(`/books/${book.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: "",
        }),
      })
      .then(r => r.json())
        .then(data => console.log(data))
    }






  return (
<div className = "catTile2">
   <div className = "centered2">
       {book.name}
       <br></br>
       {book.author}
       <img img className='book-size' src={book.photo}></img>
       <br></br>
       <br></br>
       <button onClick={returnBook}>Return Book</button>
   </div>
   </div>
  )
}
export default CheckedContainer
