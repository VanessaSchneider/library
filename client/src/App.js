import Login from './Login.js'
import { useState, useEffect } from 'react'
import Signup from './Signup'
import Logout from './Logout.js'
import { Route, Switch, useHistory, Link, useLocation } from 'react-router-dom'
// import UserPage from './UserPage'
// import BookPage from './BookPage'
// import AddBook from './AddBook'

function App () {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [books, setBooks] =useState([])
  const history = useHistory()
  const location = useLocation()

  const handleReroute = () => {
    console.log('Reroute!')
    history.push('/')
  }

  useEffect(() => {
    fetch('/me').then(response => {
      if (response.ok) {
        response.json().then(data => setUser(data))
      }
    })
  }, [])

  console.log('location', location.pathname)

  function login (username, password) {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(r => r.json())
      .then(data => (user.username ? setUser(data) : null))
  }

  useEffect(() => {
    fetch('/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

console.log(books)
  useEffect(() => {
    fetch('/books')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  function handleLogout () {
    fetch('/logout', {
      method: 'DELETE'
    })
      .then(() => setUser())
      .then(() => handleReroute())
  }

  function handleDeleteProfile () {
    fetch(`/users/${user.id}`, {
      method: 'DELETE'
    })
      .then(() => setUser())
      .then(() => handleReroute())
  }

  return (
    <div>
      <div>
      <nav className='nav'>
        {user ? null : <Signup onLogin={setUser} login={login} />}
        {user ? (
          <Logout handleLogout={handleLogout} />
        ) : (
          <Login onLogin={setUser} />
        )}
        {user ? <div></div> : null}
        {user && location.pathname !== '/' ? (
          <div className='home-button'>
            <Link to='/'>
              <button>Home</button>
            </Link>
          </div>
        ) : null}
      </nav>
          {user ? <h1 className = "centered2">Welcome to the Library, {user.username}</h1> :
     <h1 className = "centered">Welcome to the Library</h1>}

 
          </div>
          </div>

  )
}

export default App
