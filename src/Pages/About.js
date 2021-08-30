import React from "react";

const About = ({ history, match }) => {
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => history.goBack()}>Go BACK</button>
      <h2>{match.params.number}</h2>
    </div>
  );
};

export default About;
