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
    setTareas(tareas.filter(t => t.id != id) )
  };

  const marcarCompletada = (id) => {
    const tareasActual = [ ...tareas ]
    const tarea=tareasActual.findIndex(t=> t.id==id)

    tareasActual[tarea].completada = !tareasActual[tarea].completada
    setTareas (tareasActual)
  };

  return (
    <Container>
      <Tittle>Lista de Tareas</Tittle>
      <FlexContainer>
        <Input
          type="text"
          value={tituloTarea}
          onChange={(e) => setTituloTarea(e.target.value)}
        />
        <AddIcon style={{ cursor: "Pointer" }}  onClick={agregarTarea} />
      </FlexContainer>

      <TareasContainer>
        {tareas.map((t) => (
          <Tarea {...t} alBorrar={() => borrarTarea(t.id)}  alMarcar={()=>marcarCompletada(t.id)}  />
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
  background-color: #2e2e2e;
  min-width: 50dvh;
  padding: 20px;
  border-radius: 24px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Tittle = styled.h1`
 font-size: 36px;
  text-align: center;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
`;

const FlexContainer = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 10px;
  align-items: center;
  padding: 15px;
  border: 2px solid #bdbdbd;
  border-radius: 24px;
`;
const Input = styled.input`
 width: 100%;
  padding: 10px;
  background-color: #424242;
  border: none;
  color: #ffffff;
  font-size: 20px;
  border-radius: 8px;
  outline: none;
  font-family: 'Roboto', sans-serif;
`;

export default ListaTareas;
