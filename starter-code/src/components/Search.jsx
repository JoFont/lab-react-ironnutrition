import React, { useState } from 'react';
import Form from "react-bootstrap/Form";

const Search = props => {
  const [searchQuery, setQuery] = useState("");

  const search = e => {
    const value = e.target.value;
    setQuery(value);

    const res = props.list.filter(el => el.name.toLowerCase().includes(value.toLowerCase()));
    props.filteredList(res);
  }

  return (
    <Form className="w-100">
      <Form.Group>
        <Form.Control type="text" placeholder="Search" value={searchQuery} onChange={search}/>
      </Form.Group>
    </Form>
  )
}

export default Search
