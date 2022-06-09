import Login from "./Login.js";
import { useState, useEffect } from "react";
import Signup from "./Signup";
import Logout from "./Logout.js";
import { Route, Switch, useHistory, Link, useLocation } from "react-router-dom";
import UserPage from "./UserPage";
import BookPage from "./BookPage";
import FeedPage from "./FeedPage";

function App() {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  const [checkedBooks, setCheckedBooks] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const handleReroute = () => {
    console.log("Reroute!");
    history.push("/");
  };


  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
      }
    });
  }, []);

  console.log("location", location.pathname);

  function login(username, password) {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .then((data) => (user.username ? setUser(data) : null));
  }

  console.log(books);
  useEffect(() => {
    fetch("/getbooks")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

console.log("books",books)

// useEffect(() => {
//   fetch("/getbooks")
//     .then((res) => res.json())
//     .then((data) => setBooks(data));
// }, [checkedBooks]);


  useEffect(() => {
    fetch("/getCheckedBooks")
      .then((res) => res.json())
      .then((data) => setCheckedBooks(data));
  }, []);


  // useEffect(() => {
  //   fetch("/getCheckedBooks")
  //     .then((res) => res.json())
  //     .then((data) => setCheckedBooks(data));
  // }, [books]);


  useEffect(() => {
    fetch("/getCheckedBooks")
      .then((res) => res.json())
      .then((data) => setCheckedBooks(data));
  }, [user]);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
      .then(() => setUser(""))
      .then(() => handleReroute());
  }

 function handleReturnBook(id){
const filteredBooks = checkedBooks.filter((book)=>book.id!==id)
setCheckedBooks(filteredBooks)
 }
 function handleCheckOutBook(newItem){
    setCheckedBooks([newItem, ...checkedBooks]);}

    function handleDeleteBook(id){
      const filteredBooks1 = books.filter((book)=>book.id!==id)
      setBooks(filteredBooks1)
       }


       function handleAddBook(newItem){
        setBooks([...books, newItem])}

  return (
    <div>
      <div>
        <nav className="nav">
          {user ? null : <Signup onLogin={setUser} login={login} />}
          {user ? (
            <Logout handleLogout={handleLogout} />
          ) : (
            <Login onLogin={setUser} />
          )}
          {user ? <div></div> : null}
          {user && location.pathname !== "/" ? (
            <div className="home-button">
              <Link to="/">
                <button>Home</button>
              </Link>
            </div>
          ) : null}
           {user && location.pathname !== `/users/${user.username}` && checkedBooks.length>0 ? (
            <div className="signup-button">
           <Link to={`/users/${user.username}`}>
                <button>My Checked Out Books</button>
              </Link>
            </div>
          ) : null}
        </nav>

        <Switch>
          <Route exact path="/">
            <div>
              {user ? (
                <div>
                  <h1 className="centered2">
                    Welcome to the Library, {user.username}
                  </h1>
                  <h2 className="centered3">
                    Would you like to check out any of these books? 
                  </h2>
                  <h2 className="centered3">
                    Sorry we only have 1 copy of each book
                  </h2>
                </div>
              ) : (
                <h1 className="centered">Welcome to the Little Library</h1>
              )}
            </div>
            {user ? <FeedPage books={books} /> : null}
          </Route>
          <Route exact path={`/books/:name`}>
            <BookPage user={user} handleCheckOutBook={handleCheckOutBook} handleDeleteBook={handleDeleteBook} />
          </Route>
          <Route exact path={`/users/:username`}>
            <UserPage checkedBooks={checkedBooks} handleReturnBook={handleReturnBook} handleAddBook={handleAddBook} 
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
