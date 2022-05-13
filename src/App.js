import Contacto from "./Pages/Contacto/Contacto";
import Home from "./Pages/Home/Home"
import SobreMi from "./Pages/SobreMi/SobreMi"
import {Fragment} from "react"
import LoQueHago from "./Pages/LoQueHago/LoQueHago";
import Portafolio from "./Pages/Portafolio/Portafolio"


function App() {
  return (
    <Fragment>
      <Home/>
      <SobreMi/>
      <LoQueHago/>
      <Portafolio/>
      <Contacto/>
    </Fragment>
  );
}

export default App;
