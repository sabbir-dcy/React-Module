import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
  const [house, setHouse] = useContext(RingContext)
  const handleHouse = () =>{
    setHouse(house + 1)
  }
  return (
    <div>
      <h2>Aunty : {house}</h2>
      <button onClick={handleHouse}>buy house</button>
    </div>
  );
};

export default Aunty;