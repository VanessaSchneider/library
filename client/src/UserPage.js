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

  return( <div>Hi from the user page</div>)
}

export default UserPage;
