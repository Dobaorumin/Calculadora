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
    const formatedNumber = numero?.toLocaleString("es-ES", {style:"currency",currency:"EUR"});
    return formatedNumber
  }


  return (
    <>
    <div className="hero">
      <div className="container">
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
          <h6 className="Dinero">Gastos fijos: {formatCurrency(data.gastosBasicos || data.gastosBasicosMenores)}
          <p className="warning">(Alquiler,Coche,Comida...)</p>
          </h6>
          <h6 className="Dinero">Gastos personales: {formatCurrency(data.gastosPersonales || data.gastosPersonalesMenores)}
          <p className="warning">(Salir,Caprichos...)</p>
          </h6>
          <h6 className="Dinero">Dinero que debes ahorrar: {formatCurrency(data.ahorro || data.ahorroMenores)}</h6>
          <h6 className="Dinero">En un año, habrías ahorrado: {formatCurrency(data.ahorradoAño || data.ahorradoAñoMenores)}</h6>

        </div>
      ) : null}
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
