import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function UserPage () {
    const [user, setUser] =useState("")


    useEffect(() => {
        fetch('/me').then(response => {
          if (response.ok) {
            response.json().then(data => setUser(data))
          }
        })
      }, [])

  return(<div>
      
    <h1 className = "centered2">Hello {user.username}</h1>
    <h2 className = "centered3">Books You Have Checked Out</h2>
    </div>)
}

export default UserPage;
