import axios from "axios";
const getAPI=()=>{
    return axios.create({baseURL:"http://localhost:7000"});
}
//Sending data to json-server
export const createMovie = async (data) => {
    console.log("function called");
    return (await getAPI().post("/movies", data)).data;
  };
export const getAllMovies = async ()=>{
    return (await getAPI().get("movies")).data;
}
  //Deleting data from json server
  export const deleteMovieWithId =async (id) => {
    return (await getAPI().delete(`/movies/${id}`)).data;
  };
  //updating data in json-server
  export const updateMovie =async (data) => {
      return (await getAPI().put(`/movies/${data.id}`, data)).data;
  };