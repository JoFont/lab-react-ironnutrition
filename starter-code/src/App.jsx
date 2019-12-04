import React, { useState } from 'react';
import uuid from "uuid/v1";
import './App.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import foodList from './foods';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import TodaysFoods from './components/TodaysFoods';

const App = props => {

  foodList.forEach(el => {
    el.id = uuid();
  });

  const [itemList, setItemList] = useState(foodList);
  const [savedList, setSavedList] = useState([]);

  const updateList = list => {
    setItemList(list);
  }

  const updateSavedList = item => {
    setSavedList([...savedList, item]);
  }


  return (
    <Container>
      <Row>
        <Search list={foodList} filteredList={updateList}/>
      </Row>
      <Row>
        <Col>
          {itemList.map(el => (
            <FoodBox key={el.id} {...el} saveItem={updateSavedList}/>
          ))}
        </Col>
        <Col>
          <TodaysFoods list={savedList}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
