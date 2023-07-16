import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
  text-transform: uppercase;
  width: 100%;
`;

const Select = styled.select`
  text-align: center;
  width: 90%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: none;
  background-color: #fbae56;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  -webkit-appearance: none;
  &:hover {
    cursor: pointer;
    background-color: #4080a9;
    color: #fff;
    border: none;
    outline: none;
  }
`;
const useCriptoMoneda = (label, stadoInicial, opciones) => {
  const [state, setState] = useState(stadoInicial);

  //console.log(opciones);

  const SelectCripto = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">--seleccione--</option>
        {opciones.map((opcion) => (
          <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
            {opcion.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectCripto, setState];
};

export default useCriptoMoneda;
