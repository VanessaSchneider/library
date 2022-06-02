import { useState, useEffect } from 'react'

function BookDisplay () {
    const [books, setBooks]=useState("")
    useEffect(() => {
        fetch('/books')
          .then(res => res.json())
          .then(data => setBooks(data))
      }, [])
    
      console.log(books)




    return(
        <div>
        <div className = "centered"> Book Display </div>
        </div>
    )

}
export default BookDisplay;