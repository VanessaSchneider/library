import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import BookContainer from './BookContainer'
function FeedPage ({ books }) {
  const bookContainer = books.map(book => (
    <BookContainer book={book} key={book.name} />
  ))
  return <div>{bookContainer}</div>
}

export default FeedPage
