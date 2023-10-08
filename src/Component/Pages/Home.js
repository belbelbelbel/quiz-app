import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "../../Styles/Pagecss/Home.css"
import Categories from "../../Data/Categories.js"
import { Button, MenuItem, TextField } from '@mui/material'
import ErrorMessage from './ErrorMessage'
export const Home = ({ name, setname,fetchquestion }) => {
    const [categories, setcategories] = useState("")
    const [difficulty, setdifficulty] = useState("")
    const navigate = useNavigate()
    const [error, seterror] = useState(false)
    
    const handlesubmit = () => {
        if (!name || !categories || !difficulty ) {
            seterror(true)
            return;
        }
        else {
            seterror(false)
            navigate("./Quiz")
            fetchquestion(categories,difficulty)
        }
    }

    return (
        <div className='content'>
            <div className='settings'>

                <img src="/quiz.svg" alt="quiz" className='banner' />
                <span style={{ fontSize: 30 }}>Quiz setting</span>

                <div className="settings__select">
                    {error && <ErrorMessage>please fill the form</ErrorMessage>}
                    <TextField label="enter your name" value={name} onChange={e => setname(e.target.value)} variant='outlined' style={{ marginBottom: 25 }} />
                    <TextField select label="select categories" value={categories} onChange={(e) => setcategories(e.target.value)} variant='outlined' style={{ marginBottom: 25 }}>
                        {Categories.map((cate) => (
                            <MenuItem key={cate.category} value={cate.value}>
                                {cate.category}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField select label="enter difficulty" value={difficulty} onChange={e => setdifficulty(e.target.value)} variant='outlined' style={{ marginBottom: 25 }}>
                        <MenuItem key="easy" value="easy">Easy</MenuItem>
                        <MenuItem key="medium" value="medium">medium</MenuItem>
                        <MenuItem key="hard" value="hard">difficult</MenuItem>
                    </TextField>
                    <Button onClick={() => handlesubmit()} variant='contained' color='primary' size='large'>
                        start quiz
                    </Button>
                </div>
            </div>
        </div>
    )
}
