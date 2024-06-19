import React from "react";
import styled from "styled-components";
import TrashIcon from "./TrashIcon";
import CheckIcon from "./CheckIcon";

const Tarea = ({ tarea, completada }) => {
  return (
    <FlexContainer>
      <TitleTarea completada={completada}>{tarea}</TitleTarea>
      <IconContainer bg="green">
        <CheckIcon />
      </IconContainer>
      <IconContainer>
        <TrashIcon />
      </IconContainer>
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
`;

const TitleTarea = styled.p`
  width: 100%;
  border: 2px solid white;
  border-radius: 24px;
  padding: 10px;
  text-decoration: ${(props) => (props.completada ? "line-through" : "none")};
`;

const IconContainer = styled.div`
  background-color: ${(props) => props.bg || "red"};
  padding: 8px;
  border-radius: 14px;
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
  }
`;

export default Tarea;
