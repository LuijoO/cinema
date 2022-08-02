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
import { Search } from "./components/Search";

export function App() {
  return ( 
    <Router>
      <nav className={style.main_menu}>
        <ul>
          <li><a href="#">Drama</a></li>
          <li><a href="#">Terror</a></li>
          <li><a href="#">Comedia</a></li>
        </ul>
        <header className={style.contenedor}>
        <Link to="/">
          <h1>MOVIELAND</h1>
        </Link>
      </header>
        <Search />
      </nav>
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