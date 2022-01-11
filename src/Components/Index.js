import React, { useState } from "react";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import MovieCard from "./MovieCard";
function Index() {
  const [data, setdata] = useState([]);
const deleteMovie=(index)=>{
  let temp=[...data];
  temp.splice(index,1);
  setdata(temp);
}
  return (
    <>
    <div className="col-6 mx-auto">
      <Formik
        initialValues={{ name: "", details: "", genre: "", rating: "" }}
        onSubmit={(values) => {
          let temp=[...data];
          temp.push(values);
          setdata(temp);
          console.log("data is ",data);
        }}
      >
        {({
          handleChange,
          handleSubmit,
        }) => (
          <Form>
            <Form.Group controlId="form.Name">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter Movie Name here"
              />
              <Form.Label>Movie Detail</Form.Label>
              <Form.Control
                type="text"
                name="details"
                onChange={handleChange}
                placeholder="Enter Movie Detail here"
              />

              <Form.Label>Genre</Form.Label>
              <Form.Control as="select"
                name="genre"
                onChange={handleChange}
              >
               
                <option value="1">Action</option>
                <option value="2">Thriller</option>
                <option value="3">Comedy</option>
                <option value="4">Horror</option>
              </Form.Control>
              <Form.Label>Movie Ratting</Form.Label>

              <Form.Control as="select"
                name="rating"
                onChange={handleChange}
              >
                
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Form.Control>

              <Button
                variant="primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="w-100 mt-2"
              >
                ADD
              </Button>
            </Form.Group>
          </Form>
        )}
      </Formik>
      <br/>
      <br/>
    </div>
    <div className="col-9 mx-auto">
    {
         (data.map((movie,index)=> <MovieCard key={index} movie={{...movie,index}} deleteMovie={deleteMovie}/>))
      }
    </div>
    </>
  );
}

export default Index;
