// import { MoviesGrid } from "./components/MoviesGrid";
import style from "./App.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

 
export function App() {
  return ( 
    <Router>
      <header className={style.contenedor}>
        <Link to="/">
          <h1>MOVIES</h1>
        </Link>
        <h4>Descripcion breve de todo.</h4>
      </header>
      <main>
      <Switch>
        <Route exact path='/movies/:movieId'>
          <MovieDetails/>
        </Route>
        <Route exact path='/'>
          <LandingPage />
        </Route> 
      </Switch>
      </main>
    </Router>
  );
}