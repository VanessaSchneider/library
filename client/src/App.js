// import Login from './Login.js'
 import { useState, useEffect } from 'react'
// import Signup from './Signup'
// import Logout from './Logout.js'
import { Route, Switch, useHistory, Link, useLocation } from 'react-router-dom'
import BookDisplay from './BookDisplay'


function App () {
  const [books, setBooks] = useState("");
  useEffect(() => {
    fetch("/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);


  return (
    <div>
    <div className = "centered">Writers have a hard time getting their work out there. But here, we give authors the chance to get out there!</div> 
    <br></br>
    <BookDisplay books={books}/>
     </div>
  )

}
export default App
