import { useState } from "react";
import "./App.css";
import calculando from "./calculando";

function App() {
  const [money, setMoney] = useState({});
  const [data, setData] = useState("");

  const handleInput = (e) => {
    setMoney(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculando(money);
    setData(result);
  };

  const formatCurrency = (numero) => {
    const formatedNumber = numero.toLocaleString("es-ES", {style:"currency",currency:"EUR"});
    return formatedNumber
  }


  return (
    <>
    <div className="hero">
      <form className="form-input" onSubmit={handleSubmit}>
        <label className="label">Introduce tu sueldo.</label>
      <p className="warning">Ejemplo: 1200</p>
        <input minLength="3" max="999999" onChange={handleInput} type="number"></input>
        <button className="calcular" type="submit">Calcular</button>
        <p className="warning">Mínimo 3 dígitos*</p>
      </form>
      <div className="result">
      {data ? (
        <div className="result">
          <p className="Dinero">Gastos fijos: {formatCurrency(data.gastosBasicos)}
          <p className="warning">(Alquiler,Coche,Comida...)</p>
          </p>
          <p className="Dinero">Gastos personales: {formatCurrency(data.gastosPersonales)}
          <p className="warning">(Salir,Caprichos...)</p>
          </p>
          <p className="Dinero">Dinero que debes ahorrar: {formatCurrency(data.ahorro)}</p>
          <p className="Dinero">En un año, habrías ahorrado: {formatCurrency(data.ahorradoAño)}</p>

        </div>
      ) : null}
      </div>
    </div>
    </>
  );
}

export default App;
