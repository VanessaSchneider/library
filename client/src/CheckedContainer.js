function CheckedContainer({book, handleReturnBook, handleAddBook}) {
  function returnBook() {
    handleAddBook(book)
   ReturnBook()

    fetch(`/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 0,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }

  function ReturnBook(){
    handleReturnBook(book.id)
  }

  return (
    <div className="catTile2">
      <div className="centered2">
        {book ? book.name: null}
        <br></br>
        {book? book.author: null}
        <img img className="book-size" src={book.photo}></img>
        <br></br>
        <br></br>
        <button onClick={returnBook}>Return Book</button>
      </div>
    </div>
  );
}
export default CheckedContainer;
