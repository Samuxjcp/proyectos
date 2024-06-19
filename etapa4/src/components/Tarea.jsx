import React from "react";
import styled from "styled-components";
import TrashIcon from "./TrashIcon";
import CheckIcon from "./CheckIcon";

const Tarea = ({ tarea, completada, alBorrar, alMarcar }) => {
  return (
    <FlexContainer>
      <TitleTarea completada={completada}>{tarea}</TitleTarea>
      <IconContainer bg="green" onClick={alMarcar}>
        <CheckIcon />
      </IconContainer>
      <IconContainer onClick={alBorrar}>
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
  border: 2px solid #ffffff;
  border-radius: 24px;
  margin-top: 10px;
`;
const TitleTarea = styled.p`
 width: 100%;
  padding: 10px;
  color: #ffffff;
  text-decoration: ${(props) => (props.completada ? "line-through" : "none")};
  font-family: 'Roboto', sans-serif;
`;

const IconContainer = styled.div`
   background-color: ${(props) => props.bg || "#d32f2f"};
  padding: 8px;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover{
    filter: brightness(80%);
  }
  
  
`;

export default Tarea;
