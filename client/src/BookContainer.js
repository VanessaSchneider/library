function BookContainer({books}) {
  

    console.log(books);
  
  let book = []
  if (books && books.length!==0){
   book = 
      books.map((book) => (
      <div key={book.id}
      className = "centered">
          Featured Books
          <br></br>
          <br></br>
          <Link to={`/books/${book.name}`}>
        <div className = "centered">{book.name}</div>
        </Link>
        <div className = "centered">{book.summary}</div>
      </div>
    ));}
  
  
    return (
      <div>
        <div className="centered"> {book} </div>
      </div>
    );
  }
  export default BookDisplay;
  