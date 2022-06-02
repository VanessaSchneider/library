// import Login from './Login.js'
// import { useState, useEffect } from 'react'
// import Signup from './Signup'
// import Logout from './Logout.js'
import { Route, Switch, useHistory, Link, useLocation } from 'react-router-dom'
import BookDisplay from './BookDisplay'


function App () {


  return (
    <div>
    <div className = "centered">Writers have a hard time getting their work out there. But here at Kissed Every Frog Novels, we give authors the chance to get out there!</div> 
    <BookDisplay/>
     </div>
  )

}
export default App
