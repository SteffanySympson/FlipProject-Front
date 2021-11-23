import { useState } from "react";
import axios from "axios";
import Card from "../components/structure/card/Card";
import '../components/structure/card/Card.css';

export default function Exemplo() {
  const [quartos, setQuartos] = useState({quartos: 0});
  const [result, setResult] = useState([]);

  function handleChange(event) {
    setQuartos({
      [event.target.name]: Number(event.target.value),
    });
  }

  async function handleClick(event) {
    event.preventDefault();
    const response = await axios.get(
      `http://localhost:3000/anuncios/findbysuite/${quartos.quartos}`
    );
    setResult([...response.data]);
  }

  return (
    <>
      <form>
        <label htmlFor="quartos">Quartos</label>
        <select
          id="quartos"
          value={quartos.quartos}
          onChange={handleChange}
          name="quartos"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <button onClick={handleClick}>Buscar</button>
      </form>

      {result.map((currentItem) => {
        return (
          <Card
           data={{...currentItem}}
          />
        );
      })}
    </>
  );
}