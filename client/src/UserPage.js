import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import CheckedContainer from './CheckedContainer'

function UserPage () {
    const [user, setUser] =useState("")


    useEffect(() => {
        fetch('/me').then(response => {
          if (response.ok) {
            response.json().then(data => setUser(data))
          }
        })
      }, [])

      let checkedContainer =[]
      if (user && user.books.length!==0){
       checkedContainer = user.books.map(book => (
        <CheckedContainer book={book} key={book.name} />
      ))
      }


  return(<div>
      
    <h1 className = "centered2">Hello {user.username}</h1>
    <h2 className = "centered3">Books You Have Checked Out</h2>
    {checkedContainer}

    </div>)
}

export default UserPage;
