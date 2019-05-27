import React, { useState } from 'react';
import InputField from './components/InputField/InputField';

const App = () => {
  const [state, setState] = useState({
    count: 0,
    nameInput: '',
    surnameInput: '',
    pwdInput: '',
  });

  const inputNameHandler = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const update = () => {
    setState({
      ...state,
      surnameInput: "Surname updated"
    });
  }

  return (
    <div className="App">
      <p>App component: {state.count}</p>
      <button onClick={() => setState({ ...state, count: state.count + 1 })}>Add</button>

      <hr />

      <InputField value={state.nameInput} name={"nameInput"} type={"text"} handler={inputNameHandler}>Name: </InputField>
      <InputField value={state.surnameInput} name={"surnameInput"} type={"text"} handler={inputNameHandler}>Surname: </InputField>
      <InputField value={state.pwdInput} name={"pwdInput"} type={"password"} handler={inputNameHandler}>Password: </InputField>

      <button onClick={() => console.log(state)}>Check</button>
      <button onClick={update}>Update</button>
    </div>
  );
}

export default App;