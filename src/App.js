import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PokemonProvider } from "./context";

import MyPokemon from "./page/MyPokemon";
import PokemonDetail from "./page/Pokemon";
import PokemonList from "./page/PokemonList";
import Header from "./component/Header";

const App = () => {
  return (
    <PokemonProvider value={[]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/mypokemon">
            <MyPokemon />
          </Route>
          <Route path="/:pokemon">
            <PokemonDetail />
          </Route>
          <Route path="/">
            <PokemonList />
          </Route>
        </Switch>
      </Router>
    </PokemonProvider>
  );
};

export default App;
