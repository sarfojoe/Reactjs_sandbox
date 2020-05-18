import React from "react";

const Vote = ({ positive, negative }) => {
  if (positive === 0 && negative === 0) {
    return (
      <div className="vote">
        <h1>
          Nothing to show yet !! <br />
          Be first to cast your vote!!!
        </h1>
      </div>
    );
  }

  return (
    <div className="vote">
      <h1>Votes</h1>
      <h2>Love: {positive}</h2>
      <h2>Hate: {negative}</h2>
    </div>
  );
};

export default Vote;
