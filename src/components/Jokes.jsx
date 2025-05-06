import React from "react";

const Jokes = ({setup, punchline}) => {
  return (
    <div className="container">
        <div className="joke">
        <h2>{setup}</h2>
        <p>{punchline}</p>
        </div>
    </div>
  );
};

export default Jokes;
