import React, { useState } from 'react';
import './App.css';
import NumberPad from './components/numberPad/NumberPad' 
import Display from './components/display/Display'

function App() {
  const [currentOutput, setCurrentOutput] = useState<string>('')
  const [currentAnswer, setCurrentAnswer] = useState<string>('')
  const [currentOpperator, setCurrentOppertor] = useState<string>('')
  const [currentSign, setCurrentSign] = useState<string>('+')

  const calculationHandler = (input: string) => {
    console.log(input)
    if (input === 'AC') {
      setCurrentOutput('')
      setCurrentAnswer('')
    } else if (input.match(/^[0-9]/) || input === '.') {
      setCurrentOutput(currentOutput + input)
    } else if (input === '+/-') {
      currentSign === '+' ? setCurrentSign('-') : setCurrentSign('+')
      if (currentSign === '-') setCurrentOutput(currentSign + currentOutput)
    } else if (input.match(/^[\/\+\-\*]/)) {
      setCurrentAnswer(currentOutput)
      setCurrentOutput('')
      setCurrentOppertor(input)
    } else if (input === '=') {
      const answer = eval(currentAnswer + currentOpperator + currentOutput)
      setCurrentOutput(answer)
      setCurrentAnswer('')
    }
  }

  return (
    <div className='App'>
      <div className='calculator'>
        <Display output={currentOutput} />
        <NumberPad addUserInput={calculationHandler} />
      </div>
    </div>
  );
}

export default App;
