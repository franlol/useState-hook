import React, { useState } from 'react';
import InputField from './components/InputField/InputField';

const App = () => {

  const [state, setState] = useState({
    count: 0,
    nameInput: '',
    surnameInput: '',
    pwdInput: '',
  });

  const inputNameHandler = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  }

  const increment = () => {
    setState({
      ...state,
      count: state.count + 1,
    })
  }

  const update = () => {
    setState({
      ...state,
      surnameInput: "Surname updated"
    });
  }

  const checkState = () => {
    console.log(state)
  }

  return (
    <div className="App">
      <p>Counter: {state.count}</p>
      <button onClick={increment}>Add</button>

      <hr />

      <InputField value={state.nameInput} name={"nameInput"} type={"text"} handler={inputNameHandler}>Name: </InputField>
      <InputField value={state.surnameInput} name={"surnameInput"} type={"text"} handler={inputNameHandler}>Surname: </InputField>
      <InputField value={state.pwdInput} name={"pwdInput"} type={"password"} handler={inputNameHandler}>Password: </InputField>

      <button onClick={checkState}>Check</button>
      <button onClick={update}>Update</button>
    </div>
  );

}

export default App;