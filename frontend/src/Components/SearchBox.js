import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    submitHandler();
  }, [keyword]);

  return (
    <Form className='d-flex' onSubmit={submitHandler}>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      />
      {/* <Button type='submit' className='p-2' variant='outline-success'>
        Search
      </Button> */}
    </Form>
  );
};

export default SearchBox;
