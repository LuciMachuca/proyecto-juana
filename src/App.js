
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './componentes/Home/Home.jsx';
import Galeria from './componentes/Galeria/Galeria.jsx';
import Contacto from './componentes/Contacto/Contacto.jsx';
import Equipamiento from './componentes/Equipamiento/Equipamiento.jsx';
import Informacion from './componentes/Informacion/Informacion.jsx'


function App() {
  return (
    <BrowserRouter>

    <div className="App">

      <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/galeria' component={Galeria} />
        <Route path='/contacto' component={Contacto} />
        <Route path='/equipamiento' component={Equipamiento} />
        <Route path='/informacion' component={Informacion} />

      </Switch>

    </div>

  </BrowserRouter>
  );
}

export default App;

