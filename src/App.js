import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import { Route } from 'react-router-dom';
import { Home } from './Component/Pages/Home';
import { Quiz } from './Component/Pages/Quiz';
import { Result } from './Component/Pages/NoPage';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setname] = useState("")
  const [questions, setquestions] = useState([])
  const [score, setscore] = useState(0)
  const fetchquestion = async (category = "", difficulty = "") => {
    const  { data } = await axios.get( `https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
    setquestions(data.results)
  }
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home name={name} setname={setname} fetchquestion={fetchquestion} />} />
          <Route path="/Quiz" element={<Quiz name={name} score={score} setscore={setscore} setquestions={setquestions} questions={questions} />} />
          <Route path="*" element={<Result name={name} score={score} />} />
        </Routes>

      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
