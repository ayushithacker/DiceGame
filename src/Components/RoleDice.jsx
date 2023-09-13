import styled from "styled-components";

const RoleDice = ({ no, GetNumber }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={GetNumber}>
        <img src={`/images/dice${no}.png`} alt={`Dice ${no}`} />
      </div>
      <p>Click On Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 700;
    color: white;
  }
  .dice {
    cursor: pointer;
  }
`;
