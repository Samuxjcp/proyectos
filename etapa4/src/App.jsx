import styled from "styled-components"
import ListaTareas from "./components/ListaTareas"
function App() {

  return (
    
    <Main>
      <ListaTareas />
    </Main>

  )
}

const Main = styled.main `
height: 100dvh;
display: grid;
place-content: center;
`


export default App 