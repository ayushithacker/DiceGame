import styled from "styled-components";
export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  width: 180px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s background ease-in;
  border: transparent;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
    transition: 0.3s background ease-in;
  }
`;
