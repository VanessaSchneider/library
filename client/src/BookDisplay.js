import { useState, useEffect } from "react";

function BookDisplay({books}) {
  

  console.log(books);

let book = []
if (books && books.length!==0){
 book = 
    books.map((book) => (
    <div key={book.id}>
      <div>{book.name}</div>
      <div>{book.summary}</div>
    </div>
  ));}


  return (
    <div>
      <div className="centered"> {book} </div>
    </div>
  );
}
export default BookDisplay;
