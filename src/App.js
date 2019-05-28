import React, { useState } from 'react';
import InputField from './components/InputField/InputField';
import InputInfo from './components/InputInfo/InputInfo';

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
    });
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
      <InputInfo>{`Name is ${state.nameInput}`}</InputInfo>

      <InputField value={state.surnameInput} name={"surnameInput"} type={"text"} handler={inputNameHandler}>Surname: </InputField>
      <InputInfo>{`Surname is ${state.surnameInput}`}</InputInfo>

      <InputField value={state.pwdInput} name={"pwdInput"} type={"password"} handler={inputNameHandler}>Password: </InputField>
      <InputInfo>{`Password is ${state.pwdInput.replace(/./g, '*')}`}</InputInfo>

      <button onClick={checkState}>Check</button>
      <button onClick={update}>Update</button>
    </div>
  );

}

export default App;