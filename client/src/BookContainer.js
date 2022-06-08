function BookContainer({book}) {
  


    return (
      <div className="centered">
       {book.name} 
       <br></br>
        {book.author} 
        <img img className='book-size' src={book.photo}></img>
      </div>
    );
  }
  export default BookContainer;
  