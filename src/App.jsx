import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ChakraProvider } from '@chakra-ui/react'
import {}from "react-router-dom"

export const App = () => {
 

  return (
    <>
    <ChakraProvider>
      
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer/>
<p>App</p>
      </ChakraProvider>
    </>
  );
};
export default App;
