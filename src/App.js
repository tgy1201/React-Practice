import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천']);

  return (
    <div className="App">
      <h4> { 글제목 } </h4>
      <button onClick={ ()=> { 글제목변경(['여자코트 추천'])}}>버튼!</button>
    </div>
  );
}

export default App;
