import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState({ count: 0 });

  console.log(state)

  return (
    <div className="App">
      <p>count: {state.count}</p>
      <button onClick={() => setState({ count: state.count + 1 })}>Add</button>
    </div>
  );
}

export default App;