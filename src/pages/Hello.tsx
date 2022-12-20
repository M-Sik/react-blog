import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hello = () => {
  const [number, setNumber] = useState(1);

  const navigate = useNavigate();
  const moveTogoPage = () => {
    navigate('/todo-page');
  };
  const double = () => {
    setNumber(number * 2);
  };

  return (
    <>
      <div onClick={moveTogoPage}>Hello</div>
      <button onClick={double}>submit</button>
      <p>{number}</p>
    </>
  );
};

export default Hello;
