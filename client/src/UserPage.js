import { useEffect, useState } from 'react'
import CheckedContainer from './CheckedContainer'

function UserPage ({checkedBooks, handleReturnBook, handleAddBook}) {
    const [user, setUser] =useState("")


      let checkedContainer =[]
      if (checkedBooks && checkedBooks.length!==0){
       checkedContainer = checkedBooks.map(book => (
        <CheckedContainer book={book} key={book.name} handleReturnBook={handleReturnBook} handleAddBook={handleAddBook}/>
      ))
      }


  return(<div>
      
    <h1 className = "centered2">Hello {user.username}</h1>
    <h2 className = "centered3">Books You Have Checked Out</h2>
    {checkedContainer}

    </div>)
}

export default UserPage;
