import { useState } from 'react';

function Signup({ login }) {

  const [signup, setSignup] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [picture, setPicture] = useState("");


  function handleSignup(e){
    e.preventDefault();
    fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          passwordConfirmation,
          picture,
        }),
      })
        .then((r) => r.json())
        .then((data)=> {
          if (data.errors)
          {
            data.errors.forEach(e => e === "Age must be greater than or equal to 18" ? alert("Must be 18 or older") : alert(e))
          }
          else{
        setSignup(false);
        setUsername('')
        setPassword("")
        setPasswordConfirmation("")
        setPicture("")
        alert("Profile Successfully Created! Please Log In.")

          }
        }
        )
    }

    const signupBox = (
      <div>
          <form onSubmit={handleSignup}>
            <div>
              <input type ="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
              </div>
              <div>
              <input type ="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
              </div>
              <div>
              <input type ="password"  value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="password confirmation"/>
              </div>
              <div>
              <input type ="text"  value={picture} onChange={(e) => setPicture(e.target.value)} placeholder="picture URL"/>
              </div>
              <div className="mb-3">
              <input type = "submit" className="btn btn-outline-light"></input>
              </div>
           
          </form>
      </div>
    )
    
return (
  <div className = "signup-container">
          <button type="button" className="login-signup" onClick ={() => setSignup(!signup)}>Signup</button>
          {signup ? signupBox : null}
  </div>
)
}

export default Signup