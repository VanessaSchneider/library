import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";


function BookPage() {
  const [book, setBook] = useState("");
  const history = useHistory();
  const { name } = useParams();
  const bookData = {
    name: name
  };



  useEffect(() => {
    fetch("/getbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    })
      .then((r) => r.json())
      .then((book) => setBook(book));
  }, []);

  
  console.log(book)

  return (
    <div className = "centered2">
      {book.name}
      <br></br>
      {book.author}
      <br></br>
      <br></br>
      <img img className='big-size' src={book.photo}></img>
      <br></br>
      <br></br>
      Check Out This Book From The Library
    </div>
  )
}

export default BookPage;
