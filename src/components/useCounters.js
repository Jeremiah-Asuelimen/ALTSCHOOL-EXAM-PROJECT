import React from 'react';
import counterHooks from '../count/usecount';
import '../styles/count.css'


function Count() {
  const { Counter, increment, decrement, reset, setNewValue } = counterHooks();
  return (
    <div id='count-box'>
      <h1>Count: {Counter}</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const countValue = e.target.elements.valueInput.value;
        setNewValue(Number(countValue));
      }}>
        <input id='input' type="number" name="valueInput" />
        <button className='btn' id='btn-input' type="submit">Set Value</button>
      </form>
      <div>
      <button className='btn' id='btn-incre' onClick={increment}>Increment</button>
      <button className='btn' id='btn-decre' onClick={decrement}>Decrement</button>
      <button className='btn' id='btn-re' onClick={reset}>Reset Value</button>
      </div>
    </div>
  );
}
export default Count;