import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";


function BookPage({

}) {
  const [book, setBook] = useState("");
  const history = useHistory();
  const { name } = useParams();
  const bookData = {
    name: name,
  };




  useEffect(() => {
    fetch("/getBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    })
      .then((r) => r.json())
      .then((book) => setBook(book));
  }, []);

  

  return (
    <div>
      {book.name}
    </div>
  )
}

export default BookPage;
