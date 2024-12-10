
import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
      , [firstNumber, setFirstNumber] = useState('0')
      , [equal, setEqual] = useState(false)
      , [operation, setOperation] = useState('')

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const Operations = (signal) => {
    if(firstNumber === '0'){

      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');

    } else if (firstNumber !== '0' && currentNumber !== '0' && equal == true){

      setEqual(false)
      setCurrentNumber('0')

    } else {
      
      switch (signal){
        case '+':     
          const sum = Number(firstNumber) + Number(currentNumber);
          setCurrentNumber('0');
          setFirstNumber(String(sum));       
          break;
        case '-':
          const minus = Number(firstNumber) - Number(currentNumber);
          setCurrentNumber('0');
          setFirstNumber(String(minus));       
          break;
        case '-':
          const divide = Number(firstNumber) / Number(currentNumber);
          setCurrentNumber('0');
          setFirstNumber(String(divide));       
          break;
        case '*':
          const multiply = Number(firstNumber) * Number(currentNumber);
          setCurrentNumber('0');
          setFirstNumber(String(multiply));       
          break;
      }
    }
  }

  const calculate = (signal) => {
    
    if (signal !== '='){

      setOperation(signal)
      Operations(signal)

    } else { 

      if (operation === '+') {
        var total = Number(currentNumber) + Number(firstNumber)
      } else if (operation === '-') {
        var total = Number(firstNumber) - Number(currentNumber)
      } else if (operation === '/') {
        var total = Number(firstNumber) / Number(currentNumber)
      } else if (operation === '*') {
        var total = Number(firstNumber) * Number(currentNumber)
      }

      setFirstNumber(String(total));
      setCurrentNumber(String(total));
      setEqual(true)

    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={()=> calculate('*')}/>
          <Button label="/" onClick={()=> calculate('/')}/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="."/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={()=> calculate('-')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={()=> calculate('+')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={()=> calculate('=')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
