import React, { useState } from "react";
import styled from "styled-components";
import AddIcon from "./AddIcon";
import Tarea from "./Tarea";
import CheckIcon from "./CheckIcon";

const obtenerUltimoId = (lista) => {
  let ultimoId = 0;

  lista.forEach((el) => {
    if (el.id > ultimoId) {
      ultimoId = el.id;
    }
  });

  return ultimoId;
};

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);

  const [tituloTarea, setTituloTarea] = useState("");

  const agregarTarea = () => {
    console.log(tituloTarea);

    setTareas([
      ...tareas,
      {
        id: obtenerUltimoId(tareas) + 1,
        tarea: tituloTarea,
        completada: false,
      },
    ]);

    console.log(tareas);
  };

  const borrarTarea = (id) => {
    
  };

  const marcarCompletada = (id) => {};

  return (
    <Container>
      <Tittle>Lista de Tareas</Tittle>
      <FlexContainer>
        <Input
          type="text"
          value={tituloTarea}
          onChange={(e) => setTituloTarea(e.target.value)}
        />
        <AddIcon onClick={agregarTarea} />
      </FlexContainer>

      <TareasContainer>
        {tareas.map((t) => (
          <Tarea {...t} />
        ))}
      </TareasContainer>
    </Container>
  );
};

const TareasContainer = styled.section`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  min-height: 60dvh;
  background-color: #474646;
  min-width: 50dvh;
  padding: 20px;
  border-radius: 24px;
`;

const Tittle = styled.h1`
  font-size: 36px;
  text-align: center;
`;

const FlexContainer = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 10px;
  align-items: center;
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: none;
  color: #e0e0e0;
  font-size: 20px;
  outline: none;
`;

export default ListaTareas;
