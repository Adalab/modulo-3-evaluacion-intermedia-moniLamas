import { useState } from "react";
import "../styles/App.scss";
import originalsClubs from "../data/clubs.json";

const App = () => {
  const [clubs, setClubs] = useState(originalsClubs);

  const htmlClubsList = clubs.map((club, index) => (
    <li key="index" className="club__item">
      <p>
        #{index}: {club.name}
      </p>
      <p>Abierto entre semana: {club.openOnWeekdays ? "Sí" : "No"}</p>
      <p>Abierto el fin de semana: {club.openOnWeekend ? "Sí" : "No"}</p>
    </li>
  ));

  return (
    <div className="page">
      <header>
        <h1>Mis clubs</h1>
        <hr />
      </header>
      <main>
        <ul className="clubs__list">{htmlClubsList}</ul>
        <form>
          <h2>Añadir un nuevo club</h2>
          <hr />
          <label htmlFor="nameClub">Nombre del club</label>
          <input type="text" name="nameClub" id="nameClub" />
          <div class="form-check">
            <label class="week">
              ¿Abre los fines de semana?
              <input
                type="checkbox"
                name="week"
                id="week"
                value="checkedValue"
                // checked
              />
            </label>
            <label class="weekend">
              ¿Abre entre semana?
              <input
                type="checkbox"
                name="weekend"
                id="weekend"
                value="checkedValue"
                // checked
              />
            </label>
          </div>
          <input type="submit" value="Añadir un nuevo club" />
        </form>
      </main>
    </div>
  );
};

export default App;
