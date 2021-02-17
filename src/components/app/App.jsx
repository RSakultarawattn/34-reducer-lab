import React from 'react';
import { useReducer } from 'react';
import reducer, { initialState }  from '../reducers/colorReducer';


export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  
  const record = (value) => dispatch({ type: 'RECORD', 
    payload: value });
  

  return (
    <>
      <button data-testid="undo" onClick={() => dispatch({
        type: 'UNDO'
      })}>undo</button>
      <button data-testid="redo" onClick={() => dispatch({
        type: 'REDO'
      })}>redo</button>
      <input data-testid="current" type="color" value={state.current} 
        onChange={({ target }) => record(target.value)} />
      <div data-testid="display" style={{ backgroundColor: state.current, 
        width: '10rem', height: '10rem' }}>
        
      </div>
    </>
  );
}
//export default App;
