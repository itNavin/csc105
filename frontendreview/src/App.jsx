import FavoriteSites from "./components/FavoriteSites";
import Gallery from "./components/Gallery";
import { Profile } from "./components/Profile";
import StateAssignment1 from "./components/stateAssignmentOne";
import StateAssignment2 from "./components/stateAssignmentTwo";
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <p id = "compo">
      <FavoriteSites></FavoriteSites>
      <Profile></Profile>
      <Gallery></Gallery>
      <StateAssignment1></StateAssignment1>
      <StateAssignment2></StateAssignment2>
      </p>
    </div>
  );
}

export default App;
