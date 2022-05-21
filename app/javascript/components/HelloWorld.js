import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greeting/greeting';

const HelloWorld = () => {
  const greeting = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  const handleClick = () => {
    dispatch(getGreeting());
  };
  return (
    <div className="">
      <button
        type="button"
        className=""
        onClick={handleClick}
      >
        Get Random Greeting
      </button>
      <p className="">{`" ${greeting.greeting} "`}</p>
    </div>
  )
}

export default HelloWorld
