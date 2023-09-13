import { Button } from "../styled/Button.js";
import styled from "styled-components";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="image">
        <img src="/images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 40px;
  line-height: 1;

  h1 {
    font-size: 95px;
    white-space: nowrap;
  }
`;
