import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "../styled/Button";

import { useState } from "react";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [no, setNo] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const GenerateNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const GetNumber = () => {
    if (!selectedNumber) {
      setError("You have not select any number");
      return;
    }

    const currentDice = GenerateNum(1, 6);
    setNo(currentDice);

    if (selectedNumber === currentDice) {
      setScore((prev) => prev + currentDice);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice no={no} GetNumber={GetNumber} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  background-color: green;
  min-height: 110vh;
  .top_section {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 40px;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    justify-content: center;
  }
`;
