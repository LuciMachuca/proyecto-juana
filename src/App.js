
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './componentes/LandingPage/LandingPage.jsx';
import Home from './componentes/Home/Home.jsx';
import Galeria from './componentes/Galeria/Galeria.jsx';
import Contacto from './componentes/Contacto/Contacto.jsx';
import Equipamiento from './componentes/Equipamiento/Equipamiento.jsx';



function App() {
  return (
    <BrowserRouter>

    <div className="App">

      <Switch>

        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Home} />
        <Route path='/galeria' component={Galeria} />
        <Route path='/contacto' component={Contacto} />
        <Route path='/equipamiento' component={Equipamiento} />

      </Switch>

    </div>

  </BrowserRouter>
  );
}

export default App;

