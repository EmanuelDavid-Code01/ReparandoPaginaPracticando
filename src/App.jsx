import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ChakraProvider } from '@chakra-ui/react'

export const App = () => {
  const Nombre =
    "emanuel esta es una variable dentro de App por encima de return y por debajo de Export const App";

  return (
    <>
    <ChakraProvider>
      <div className="container">
        <NavBar informacion ={"pasamos informacion a mi componente HIJO"} edad={25}/>
        <ItemListContainer saludo = {"Bienvenidos a mi tienda"}/>
        <ItemDetailContainer/>
        <h1>Hola ema</h1>

        <p>{Nombre}</p>
        <h1> 1 + 1 se entiende como HTML</h1>
        <h1>
          {1 + 1} realice 1 + 1 dentro de corchetes y me los sumo por eso tengo
          como resultado 2
        </h1>
      </div>
      </ChakraProvider>
    </>
  );
};
export default App;
