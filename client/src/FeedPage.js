
import BookContainer from './BookContainer'
function FeedPage ({ books }) {
  const bookContainer = books.map(book => (
    <BookContainer book={book} key={book.name} />
  ))
  return <div>{bookContainer}</div>
}

export default FeedPage
