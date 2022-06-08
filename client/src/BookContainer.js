function BookContainer({book}) {
  


    return (
      <div>
        <div className="centered"> {book.name} </div>
        <div className="centered"> {book.author} </div>
        <img img className='book-size' src={book.photo}></img>
      </div>
    );
  }
  export default BookContainer;
  