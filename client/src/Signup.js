import { useState } from 'react';

function Signup({ login }) {

  const [signup, setSignup] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");


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
        alert("Profile Successfully Created! Please Log In.")

          }
        }
        )
    }

    const signupBox = (
      <div>
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <input type ="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
              </div>
              <div className="mb-3">
              <input type ="text"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
              </div>
              <div className="mb-3">
              <input type ="text"  value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="password confirmation"/>
              </div>
              <div className="mb-3">
              <input type = "submit" className="btn btn-outline-light"></input>
              </div>
           
          </form>
      </div>
    )
    
return (
  <div>
      <nav>
          <button type="button" className="btn btn-outline-light" onClick ={() => setSignup(!signup)}>Signup</button>
          {signup ? signupBox : null}
      </nav>
  </div>
)
}

export default Signup