import React, { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - is ... ?',
    options: ['a libriary', 'a framework', 'an app'],
    correct: 0,
  },
  {
    title: 'Component - is ... ',
    options: ['an app', 'a part of the page/app', 'something weird'],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    options: [
      'Just a common HTML',
      'It is a function',
      'Common HTML, but with a possibility to execute JS-code',
    ],
    correct: 2,
  },
  {
    title: 'What is useState?',
    options: [
      'This is a function to store info about component',
      'This is a global state',
      'It is when no one needs you',
    ],
    correct: 1,
  }
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You have answered {correct} questions correctly from {questions.length}</h2>
      <a href='/'>
        <button>Try again</button>
      </a>
    </div>
  );
}

function Game({ question, onClickOption, step}) {
  let stepPercentage = Math.round((step / questions.length) * 100) + 1;

  return (
    <>
      <div className="progress">
        <div style={ {width: `${stepPercentage}%`}} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.options.map((q, index) => 
          <li onClick={() => onClickOption(index)} key={q}>
            {q}
          </li>)
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)

  const question = questions[step]

  const onClickOption = (index) => {
     
      setStep(step + 1)
      if(index == question.correct) {
        setCorrect(correct + 1)
      }
  }

 

  return (
    <div className="App">
      {
        step != questions.length ? <Game step={step} question={question} onClickOption={onClickOption}/> :  (
          
          <Result correct={correct}/>
        )
      }
      {/* */}
    </div>
  );
}

export default App;
