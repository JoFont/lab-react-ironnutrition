import React, { useState } from 'react'

const FoodBox = props => {
  const imgStyles = {
    maxWidth: "10em"
  }

  const [inputVal, setInputVal] = useState(1);

  const handleChange = e => {
    setInputVal(e.target.value);
  }

  const handleAddItem = e => {
    e.preventDefault();
    props.saveItem({
      id: props.id,
      name: props.name,
      calories: props.calories,
      quantity: inputVal
    });
  }

  return (
    <div className="media">
      <img src={props.image} className="img-thumbnail mr-3 mw-25 border-0"
        style={imgStyles}
        alt={props.name}
      />
      <div className="media-body align-self-center">
        <h5 className="mt-0 mb-1">{props.name}</h5>
        <small>{props.calories} cal</small>
      </div>
      <form className="row align-self-center">
        <input className="form-control col-9" type="number" value={inputVal} onChange={handleChange}/>
        <button className="btn btn-primary col-3" onClick={handleAddItem} >+</button>
      </form>
    </div>
  )
}

export default FoodBox
