import React from "react";
import Navbar from "../Components/Navbar";

const Contact = ({ history, location: { state }, ...rest }) => {
  console.log(history);
  return (
    <div>
      <h1> Contact Page </h1>
      <button onClick={() => history.goForward()}>Go Forward</button>
      <h1>{state.movie.name}</h1>
      <Navbar {...rest} />
    </div>
  );
};

export default Contact;
