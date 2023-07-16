import styled from "@emotion/styled";
import useMoneda from "../hokks/useMoneda";
import useCriptoMoneda from "../hokks/useCriptoMoneda";
import { useEffect, useState } from "react";
import axios from "axios";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  border-radius: 10px;
  width: 80%;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #66a2e2;
    cursor: pointer;
    color: #000;
    box-shadow: 0 0 10px #66a2e2;
  }
`;
const Formulario = () => {
  const [listaCripto, setListaCripto] = useState([]);

  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
    { codigo: "ARS", nombre: "Peso Argentino" },
    { codigo: "CLP", nombre: "Peso Chileno" },
    { codigo: "JPY", nombre: "Yen Japones" },
    { codigo: "BRL", nombre: "Real Brasileño" },
    { codigo: "COP", nombre: "Peso Colombiano" },
    { codigo: "UYU", nombre: "Peso Uruguayo" },
    { codigo: "VEF", nombre: "Bolivar Fuerte" },
    { codigo: "CHF", nombre: "Franco Suizo" },
    { codigo: "CRC", nombre: "Colón Costa Rica" },
    { codigo: "MAD", nombre: "Dirham Marroquí" },
  ];
  const [moneda, SelectMonedas] = useMoneda("Elige tu moneda", "", MONEDAS);

  const [criptomoneda, SelectCripto] = useCriptoMoneda(
    "Elige tu criptomoneda",
    "",
    listaCripto
  );

  useEffect(() => {
    const getApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const res = await axios.get(url);
      setListaCripto(res.data.Data);
    };
    getApi();
  }, []);

  return (
    <form>
      <SelectMonedas />
      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
