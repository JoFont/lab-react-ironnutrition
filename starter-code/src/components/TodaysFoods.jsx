import React, { useState, useEffect } from 'react'


const TodaysFoods = props => {
  const [totalCal, setTotalCal] = useState(0);

  useEffect(() => {
    if(props.list.length < 1) return;

    let totalCalculatedCalories = 0;
    props.list.forEach(el => {
      totalCalculatedCalories += (el.quantity * el.calories);
    })
    
    setTotalCal(totalCalculatedCalories);
  }, [props.list]);

  return (
    <div>
      <ul>
        {props.list.map(el => (
          <li key={el.id}>
            <span>{el.quantity} {el.name} = {el.quantity * el.calories} cal</span>
          </li>
        ))}
      </ul>
      <p>Total Cal: {totalCal}</p>
    </div>
  )
}

export default TodaysFoods;
