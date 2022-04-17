import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";



function WordContainer({words, letters, user, setFinalCorrect, finalCorrect, setLetters}) {
    const [userGuess, setUserGuess] = useState("")
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongtLetters] = useState([])
    const [finalWrong, setFinalWrong] = useState([])
    const [index, setIndex] = useState()
  


  if (user) console.log(user.task.task4)


      letters.sort((a, b) => parseFloat(a.id)-parseFloat(b.id))




let blanksToShow = letters.map(letter=> <div className = "catTile" key = {letter.id}>
{letter.letter2}
  </div>)



    function handleGuess(event) {
        setUserGuess(event.target.value)
      }
      


    async function handleSubmit(e) {
        e.preventDefault();

            let guess = userGuess.toUpperCase()
  


            let lettersArr= [] 
            lettersArr = letters.map(letter=>
        letter.letter)



       
      if (guess && lettersArr.includes(guess)){ correctLetters.push(guess)
        console.log("correctletters", correctLetters)}
    else {wrongLetters.push(guess)
       }
   

                    


            let filteredCorrect = [...new Set(correctLetters)];
             console.log("filteredcorrect", filteredCorrect)
            let filteredWrong = [...new Set(wrongLetters)]
                                       
            let correctShow = []
            correctShow = correctLetters.map((letter)=>(<li>letter)</li>))
            console.log(correctShow)


            let newArray = letters.filter(f=>filteredCorrect.includes(f.letter))
            newArray.map(letter => letter.letter2 = letter.letter )
                              

                       
                                const updated = letters.map((letter) => {
                                    if (letter.id === newArray[0].id) {
                                      return newArray[0];
                                    } else {
                                      return letter;
                                    }
                                  });

                                  console.log("updated", updated)

                                  setLetters(updated)
                                  setLetters(updated)
                              
                                
                                setFinalCorrect((finalCorrect)=>[...filteredCorrect])
                                setFinalWrong((finalWrong)=>[...filteredWrong])
      

                               
                                
                               let index= await letters.filter(f=>finalCorrect.includes(f.letter))

                           
                  

                                        fetch(`/words/${words.id}`, {
                                          method: "PATCH",
                                          headers: {
                                            "Content-Type": "application/json",
                                          },
                                          body: JSON.stringify({
                                            letters :index
                                          }),
                                        })
                                        .then((r) => r.json())
                                        .then((updatedItem) => console.log(updatedItem));

                                        console.log(index)
                                         }

                                    
     



    return (

        <div>



       <div>


       {blanksToShow} 
       </div>

       <div>
       <form onSubmit={handleSubmit}>
            <input type="text"
            className="textpost"
             placeholder="Guess letter" onChange={handleGuess} value={userGuess} />
            <button className="buttons" type="submit">Submit</button>
             </form>
            </div>
            <div>
               

           Incorrect Letters Guessed
           {finalWrong.map((c)=>(<li> {c} </li>))}
  
      </div>
           {finalCorrect.length===7 || user && user.task.task4 ===1 ?
        <NavLink to="/warlock">
    <button className = "buttons">Warlock's Castle</button>
    </NavLink> : null}
        </div>
    )}

    export default WordContainer;