import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNum = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>

      <div className="flex">
        {arrNum.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}{" "}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .error {
    color: red;
    font-weight: 700;
  }
  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    margin-top: 10px;
    font-weight: 800;
  }
`;

const Box = styled.div`
  display: grid;
  place-items: center;
  border: 1px solid black;
  border-radius: 5px;
  height: 70px;
  width: 70px;
  font-size: 24px;
  font-weight: bold;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
