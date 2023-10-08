import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage'
import "../../Styles/Pagecss/Questions.css"
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
export const Question = ({questions,score,setcurrentques, setshow, currentques,correct,setscore,setquestions,option}) => {
  const [selected,setselected] = useState(null)
  const [error,seterror] = useState(false)
  const navigate = useNavigate()
  const handleselect = (opt) =>  {
    if(selected === opt && selected === correct) {
        return "select"
    }
    else if (selected === opt && selected !== correct) {
        return "wrong"
    }
    else if (opt === correct) {
        return "select"
    }
  }
  const handlenext = () => {
    if(currentques >= 9) {
      setshow(false)
    }
    else if(selected) {
      setcurrentques(currentques + 1)
      setselected()
    }
    else {
        seterror(true)
    }
  }
  const handlecheck = (opt) => {
    if(opt === correct) {
        setscore(score + 1)
    }
    setselected(opt)
    seterror(false)
  }
  const handlequit = () => {
    setquestions("")
    setcurrentques(0)
    navigate("/")
  }
    return (
    <div className='question'>Quetions: {currentques + 1}
    <div className='singleQuestion'>
        <h2>{questions[currentques]?.question}</h2>
        <div className="options">
            {error && <ErrorMessage><span>please fill the field</span></ErrorMessage>}
            {option && option.map(opt => (
                <button onClick={() => handlecheck(opt)}
                 disabled={selected} key={opt} className={`singleOption ${selected && handleselect(opt)}`}>{opt}</button>
            ))}
        </div>
        <div className="controls">
          <Button variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            onClick={()=> handlequit()}
            >QUIT</Button>
          <Button   variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={() => handlenext()}>NEXT QUESTION</Button>
        </div>
    </div>
    </div>
  )
}
