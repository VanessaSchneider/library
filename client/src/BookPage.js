import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function BookPage({handleCheckOutBook, handleDeleteBook}) {
  const [book, setBook] = useState("");
  const [user, setUser] = useState("");
  const history = useHistory();
  const { name } = useParams();
  const bookData = {
    name: name,
  };

  function CheckOut() {
    handleCheckOutBook(book)
    handleDeleteBook(book.id)
    fetch(`/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }

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

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
      }
    });
  }, []);

  console.log(book);

  return (
    <div className="centered2">
      {book.name}
      <br></br>
      {book.author}
      <br></br>
      <br></br>
      <img img className="big-size" src={book.photo}></img>
      <br></br>
      <br></br>
      <br></br>
      <Link to={`/users/${user.username}`}>
        <button onClick={CheckOut} className="checkout">
          {" "}
          Check Out This Book{" "}
        </button>
      </Link>
    </div>
  );
}

export default BookPage;
