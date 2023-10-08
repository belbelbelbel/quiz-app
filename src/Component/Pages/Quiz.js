import { Button, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import "../../Styles/Pagecss/Quiz.css"
import { useEffect } from 'react'
import { Question } from './Question'

export const Quiz = ({ score, setscore, questions, setquestions, name }) => {
  const [option, setoption] = useState([])
  const [currentques, setcurrentques] = useState(0)
  const [show,setshow] = useState(true)
  useEffect(() => {
    if (questions && questions[currentques]) {
      const optionsToShuffle = [
        questions[currentques]?.correct_answer,
        ...questions[currentques]?.incorrect_answers,
      ];
        setoption(handleshuffle(optionsToShuffle));
      
    }
  }, [questions, currentques]);
  

  console.log(questions)
  const handleshuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5)
  }
  let content
  if(questions) {
    content =   <div className='quizInfo'>
      <span>{questions[currentques]?.category}</span>
      <Question questions={questions} setshow={setshow} score={score}  setcurrentques={setcurrentques} currentques={currentques} correct={questions[currentques]?.correct_answer} setquestions={setquestions} setscore={setscore} option={option}/>
      <span>score : {score}</span>
      
    </div>
  } 
  else {
    content = (
      <CircularProgress 
      style={{ margin: 100 }}
      color="inherit"
      size={150}
      thickness={1} />
    )
  }
  
  return (
    <div className='quiz'>
      <span className="subtitle">welcome, {name}</span>
      {
        show ? <div>{content}</div> : 
        <div className='result'>
        <span className="title"> Final score : {(score / questions.length) * 100}%</span>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ alignSelf: "center", marginTop: 20 }}
          href="/"
        > Go to home page</Button>
      </div>
      }
    </div>
  
  )
}
