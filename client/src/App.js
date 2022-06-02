// import Login from './Login.js'
 import { useState, useEffect } from 'react'
// import Signup from './Signup'
// import Logout from './Logout.js'
import { Route, Switch, useHistory, Link, useLocation } from 'react-router-dom'
import BookDisplay from './BookDisplay'
import BookPage from './BookPage'


function App () {
  const [books, setBooks] = useState("");
  useEffect(() => {
    fetch("/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);


  return (
    <Switch>
        <Route exact path='/'>

    <div>
      <br></br>
      <br></br>
    <div className = "centered">Writers have a hard time getting their work out there. But here, we give authors the chance to get out there!</div> 
    <br></br>
    <br></br>
    <BookDisplay books={books}/>
     </div>
     </Route>
     <Route exact path={`/books/:name`}>
          <BookPage
          
          />
        </Route>

     </Switch>
  )

}
export default App
