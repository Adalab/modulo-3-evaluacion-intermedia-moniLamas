import { useState } from "react";
import "../styles/App.scss";
import originalsClubs from "../data/clubs.json";

const App = () => {
  const [clubs, setClubs] = useState(originalsClubs);

  const [newName, setNewName] = useState("");
  const [newOpenWeek, setNewOpenWeek] = useState("");
  const [newOpenWeekend, setNewOpenWeekend] = useState("");

  const handleChangeNewClub = (ev) => {
    setNewName(ev.currentTarget.value);
  };

  const handleChangeNewOpenWeek = (ev) => {
    setNewOpenWeek(ev.target.checked ? "true" : "false");
  };

  const handleChangeNewOpenWeekend = (ev) => {
    setNewOpenWeekend(ev.target.checked);
  };

  const handleClick = (ev) => {
    ev.preventDefault();

    const newClub = {
      name: newName,
      openOnWeekdays: newOpenWeek,
      openOnWeekend: newOpenWeekend,
    };

    setClubs([...clubs, newClub]);

    setNewName("");
    setNewOpenWeek("");
    setNewOpenWeekend("");
  };

  const htmlClubsList = clubs.map((club, index) => (
    <li key="index" className="club__item">
      <p>
        #{index + 1}: {club.name}
      </p>
      <p>Abierto entre semana: {club.openOnWeekdays ? "Sí" : "No"}</p>
      <p>Abierto el fin de semana: {club.openOnWeekend ? "Sí" : "No"}</p>
    </li>
  ));

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Mis clubs</h1>
        <form className="header__form">
          <label htmlFor="show">Mostrar</label>
          <select name="show" id="show">
            <option value="todos">todos</option>
            <option value="week">los que abren entre semana</option>
            <option value="weekend">los que abren el fin de semana</option>
          </select>
        </form>
        <hr />
      </header>
      <main>
        <ul className="clubs__list">{htmlClubsList}</ul>
        <h2 className="main__title">Añadir un nuevo club</h2>
        <form>
          <hr />
          <label htmlFor="nameClub">Nombre del club</label>
          <input
            type="text"
            name="nameClub"
            id="nameClub"
            onChange={handleChangeNewClub}
            value={newName}
          />
          <div className="form-check">
            <label htmlFor="week">
              ¿Abre los fines de semana?
              <input
                type="checkbox"
                name="week"
                id="week"
                onChange={handleChangeNewOpenWeek}
                value={newOpenWeek}
              />
            </label>
            <label htmlFor="weekend">
              ¿Abre entre semana?
              <input
                type="checkbox"
                name="weekend"
                id="weekend"
                onChange={handleChangeNewOpenWeekend}
                value={newOpenWeekend}
              />
            </label>
          </div>
          <input
            type="submit"
            value="Añadir un nuevo club"
            onClick={handleClick}
          />
        </form>
      </main>
    </div>
  );
};

export default App;
