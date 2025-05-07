import React from "react";

const Jokes = ({props}) => {
  return (
    <div className="container">
        <div className="joke">
        <p>{props.setup}</p>
        <p>{props.punchline}</p>
        <hr></hr>
        </div>
    </div>
  );
};

export default Jokes;
