import React, { useState } from "react";
import { Formik } from "formik";
import { Form, Button} from "react-bootstrap";
import MovieCard from "./MovieCard";
import * as Yup from "yup";
import {useSelector,useDispatch} from 'react-redux'
import {addMovieAction,deleteMovieAction,updateMovieAction} from '../redux/action'

function Index() {
  const myState = useSelector((state) => state.movie.movieList);
  console.log('myState',myState)
  const dispatch = useDispatch();
  const validate = Yup.object({
    name: Yup.string()
      .max(25, "must be 25 charachter or less")
      .required("this is Required"),
    details: Yup.string()
      .min(8, "must be 8 charachter or more")
      .max(100, "must be 100 charachter or less")
      .required("this is Required"),
    genre: Yup.string().required("this is Required"),
    rating: Yup.number().required("this is Required"),
  });
  const [data, setdata] = useState([]);
  const [initialValues, setInitailValues] = useState({
    name: "",
    details: "",
    genre: "",
    rating: "",
  });
  const [isUpdate, setisUpdate] = useState(false);
  const [currentIndex, setcurrentIndex] = useState(0);
  const deleteMovie = (index) => {
    let temp = [...data];
    temp.splice(index, 1);
    setdata(temp);
  dispatch(deleteMovieAction(temp));
  };
  const UpdateMovie1 = (index) => {
    let temp = [...data];
    let recordUpdate = temp[index];
    console.log("value is ",recordUpdate);
    setInitailValues(recordUpdate); 
    setisUpdate(true);
    setcurrentIndex(index);
  };
  return (
    <>
      <div className="col-6 mx-auto">
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          onSubmit={(values) => {
            let temp = [...data];
            if (isUpdate) {
              temp[currentIndex] = values;
            } else {
              temp.push(values);
            }
            setdata(temp);
            if(isUpdate)
            {
              dispatch(updateMovieAction(temp))
            }
            else{
              dispatch(addMovieAction(temp))
       
            }
         
            setisUpdate(false);
            console.log("data is ", data);
          }}
          validationSchema={validate}
        >
          {({ handleChange, handleSubmit, errors,values }) => (
            <Form autocomplete="off">
              <Form.Group controlId="form.Name">
                <Form.Label>Movie Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Enter Movie Name here"
                />
                <div className="text-danger">{errors.name}</div>
                <Form.Label>Movie Detail</Form.Label>
                <Form.Control
                  type="text"
                  name="details"
                  value={values.details}
                  onChange={handleChange}
                  placeholder="Enter Movie Detail here"
                />
                <div className="text-danger">{errors.details}</div>

                <Form.Label>Genre</Form.Label>
                 
                <Form.Control as="select" name="genre"   value={values.genre} onChange={handleChange}>
                  <option value="Action">Action</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Horror">Horror</option>
                </Form.Control>
                <div className="text-danger">{errors.genre}</div>
                <Form.Label>Movie Ratting</Form.Label>

                <Form.Control as="select" name="rating"  value={values.rating} onChange={handleChange}>
                  <option id="1">0</option>
                  <option id="2">1</option>
                  <option id="3">2</option>
                  <option id="4">3</option>
                  <option id="5">4</option>
                  <option id="6">5</option>
                </Form.Control>
                <div className="text-danger">{errors.rating}</div>

                <Button
                  variant="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  className="w-100 mt-2"
                >
                  {isUpdate ? "Update" : "ADD"}
                </Button>
              </Form.Group>
            </Form>
          )}
        </Formik>
        <br />
        <br />
      </div>
      <div className="col-9 mx-auto">
        {myState.map((movie, index) => (
          <MovieCard
            key={index}
            movie={{ ...movie, index }}
            updateMovie={UpdateMovie1}
            deleteMovie={deleteMovie}
          />
        ))}
      </div>
    </>
  );
}

export default Index;
