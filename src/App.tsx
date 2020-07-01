import React, { useState } from 'react';
import './App.css';
import NumberPad from './components/numberPad/NumberPad' 
import Display from './components/display/Display'

function App() {
  const [currentOutput, setCurrentOutput] = useState<string>('')
  const [currentAnswer, setCurrentAnswer] = useState<string>('')
  const [currentOpperator, setCurrentOppertor] = useState<string>('')
  const [calculated, setCalculated] = useState<boolean>(false)

  const calculationHandler = (input: string) => {
    if (input === 'AC') {
      setCurrentOutput('')
      setCurrentAnswer('')
    } else if (input.match(/^[0-9]/) || input === '.') {
      const newInput: string = currentOutput + input
      if (newInput.match(/^-?\d*\.?\d*$/)) {
        if (calculated) {
          setCurrentOutput(input)
          setCalculated(false)
        } else {
          setCurrentOutput(newInput)
        }
      } 
    } else if (input === '+/-' && currentOutput) {
      currentOutput[0] === '-' ? setCurrentOutput(currentOutput.substr(1)) : 
        setCurrentOutput('-' + currentOutput)
    } else if (input.match(/^[\/\+\-\*]/)) {
      setCurrentAnswer(currentOutput)
      setCurrentOutput('')
      setCurrentOppertor(input)
    } else if (input === '=') {
      const answer = eval(currentAnswer + currentOpperator + currentOutput)
      setCurrentOutput(answer)
      setCurrentAnswer(answer)
      setCalculated(true)
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
