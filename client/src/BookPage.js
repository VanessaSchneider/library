import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function BookPage(){
    const [book, setBook]=useState("")
    const { name } = useParams()
    const bookData = { name: name }

    useEffect(() => {
        fetch('/getbook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bookData)
        })
          .then(r => r.json())
          .then(data => setBook(data))
      }, [])

console.log(book)

    return(

<div className = "centered">{book.name}</div>

    )
}

export default BookPage;