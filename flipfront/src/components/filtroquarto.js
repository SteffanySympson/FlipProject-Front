import { useState } from "react";
import axios from "axios";
import Card from "../components/structure/card/Card";
import '../components/structure/list/List.css';

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
      `http://localhost:3000/anuncios/quartos/${quartos.quartos}`
    );
    setResult([...response.data]);
  }

  return (
    <>
      <form className="quartosfilter">
        <label htmlFor="uf">UF</label>
          <select id="uf">
            <option>SP</option>
          </select>

        <label htmlFor="cidade">Cidade</label>
          <select id="cidade">
            <option>São Paulo</option>
          </select>

        <label htmlFor="tipo">Tipo</label>
          <select id="tipo">
            <option>Apartamento</option>
          </select>

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

          <button className="buscarbtn" onClick={handleClick}>Buscar</button>
      </form>

      <div className='tudofiltrado'>
        {result.map((currentItem) => {
          return (
            <Card
            data={{...currentItem}}
            />
          );
        })}
      </div>  
    </>
  );
}