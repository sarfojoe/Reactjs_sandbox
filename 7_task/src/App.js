import React, { useState } from "react";
import Vote from "./Vote/Vote";
import Button from "./Vote/Button";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [positive, setPositive] = useState(0);
  const [negative, setNegative] = useState(0);

  const positiveVote = () => setPositive(positive + 1);
  const negativeVote = () => setNegative(negative + 1);
  const resetVote = () => {
    setNegative(0);
    setPositive(0);
  };
  return (
    <div>
      <Button handleClick={positiveVote} text="I love it ">
        <FontAwesomeIcon icon={faThumbsUp} />
      </Button>
      <Button handleClick={negativeVote} text="I hate it ">
        <FontAwesomeIcon icon={faThumbsDown} />
      </Button>
      <Button handleClick={resetVote} text="Reset" />
      <Vote positive={positive} negative={negative} />
    </div>
  );
};

export default App;
