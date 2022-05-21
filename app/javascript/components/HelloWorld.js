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
    <div className="flex flex-col items-center mt-20 ">
      <button
        type="button"
        className="w-fit py-3 px-5 rounded-xl text-lg  bg-green-500 text-white font-medium"
        onClick={handleClick}
      >
        Get Random Greeting
      </button>
      <p className="w-fit mt-10 text-4xl  bg- text-sky-600 font-bold">{`" ${greeting.greeting} "`}</p>
    </div>
  )
}

export default HelloWorld
