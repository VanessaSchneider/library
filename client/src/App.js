import Login from './Login.js'
import { useState, useEffect } from 'react'
import Signup from './Signup'
import Logout from './Logout.js'
import { Route, Switch, useHistory, Link, useLocation } from 'react-router-dom'
import FeedPage from './FeedPage.js'
import MakePost from './MakePost.js'
import UserPage from './UserPage'
import ShowPage from './ShowPage'
import TweetPage from './TweetPage'
import CommentPage from './CommentPage'
import photo from './photo.jpeg'
import AddBook from './AddBook'

function App () {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [comments, setComments] = useState([])
  const history = useHistory()
  const location = useLocation()
  const [makePostDisplay, setMakePostDisplay] = useState(false)
  const [commentForm, setCommentForm] = useState(false)

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

  function handleAddPost (newPost) {
    setPosts([newPost, ...posts])
  }
  function handleDeletePost (id) {
    const updatedPosts = posts.filter(post => post.id !== id)
    setPosts(updatedPosts)
  }

  useEffect(() => {
    fetch('/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  useEffect(() => {
    fetch('/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  useEffect(() => {
    fetch('/comments')
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])

  function handleLogout () {
    fetch('/logout', {
      method: 'DELETE'
    })
      .then(() => setUser())
      .then(() => handleReroute())
  }

  function handleAddComment (comment) {
    setComments([comment, ...comments])
  }

  function handleDeleteProfile () {
    fetch(`/users/${user.id}`, {
      method: 'DELETE'
    })
      .then(() => setUser())
      .then(() => handleReroute())
  }

  function handleDeleteComment (id) {
    const updatedComments = comments.filter(comment => comment.id !== id)
    setComments(updatedComments)
  }
  function noPostDisplay(){ setMakePostDisplay(makePostDisplay => false)
  }

  return (
    <div>
      <div>
        <div>
          <nav className='nav'>
            {user ? null : <Signup onLogin={setUser} login={login} />}
            {user ? (
              <Logout handleLogout={handleLogout} />
            ) : (
              <Login onLogin={setUser} />
            )}
            {user ? (
              <div>
              <MakePost
                makePostDisplay={makePostDisplay}
                setMakePostDisplay={setMakePostDisplay}
                handleAddPost={handleAddPost}
                user={user}
                setUser={setUser}
              />
              </div>
            ) : null}
            {user && location.pathname !=="/AddBook" && makePostDisplay === false ? <Link to="/AddBook">
    <button onClick={noPostDisplay}>Add Book</button>
    </Link>: null}
            {/* {user && location.pathname !=="/vote" ? <Link to="/vote">
    <button >Rate the Movie</button>
    </Link>: null} */}
            {user && location.pathname !== '/' ? (
              <Link to='/'>
                <button>Home</button>
              </Link>
            ) : null}
          </nav>
          <br></br>
          {user ? null : <h1 className='below-nav3'>Read & Talk</h1>}
          {user ? null : <img src={photo} className='size'></img>}
        </div>
      </div>
      <Switch>
        <Route exact path='/'>
          <div>
            {user && makePostDisplay === false ?(
              <h1 className='below-nav'>Welcome {user.username} </h1>
            ) : null}
          </div>
          {user && makePostDisplay === false? (
            <FeedPage
              user={user}
              setUser={setUser}
              posts={posts}
              users={users}
              commentForm={commentForm}
              setCommentForm={setCommentForm}
            />
          ) : null}
     
        </Route>
        <Route exact path={`/AddBook`}>
          <AddBook
          />
        </Route>
        <Route exact path={`/users/:username`}>
          <UserPage
            users={users}
            commentForm={commentForm}
            setCommentForm={setCommentForm}
          />
        </Route>


        <Route exact path={`/shows/:name`}>
          <ShowPage
            users={users}
            commentForm={commentForm}
            setCommentForm={setCommentForm}
          />
        </Route>
        
      
      
    
        <Route exact path={`/posts/:id`}>
          <TweetPage
            user={user}
            handleDeletePost={handleDeletePost}
            commentForm={commentForm}
            setCommentForm={setCommentForm}
            handleAddComment={handleAddComment}
            comments={comments}
          />
        </Route>
        <Route exact path={`/comments/:id`}>
          <CommentPage
            handleAddComment={handleAddComment}
            handleDeleteComment={handleDeleteComment}
            user={user}
            comments={comments}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default App
