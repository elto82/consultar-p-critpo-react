import styled from "@emotion/styled";
import image from "./cryptomonedas.png";
import Formulario from "./components/Formulario";
import { useEffect, useState } from "react";
import axios from "axios";
import Cotizacion from "./components/Cotizacion";
import Spinner from "./components/Spinner";

const Heading = styled.h1`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const App = () => {
  const [cargando, setCargando] = useState(false);
  const [resultado, setResultado] = useState({});
  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptomoneda] = useState("");

  useEffect(() => {
    const CotizarCripto = async () => {
      if (moneda === "" || criptomoneda === "") return;
      //console.log(moneda, criptomoneda);
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const respuesta = await axios(url);
      setCargando(true);

      setTimeout(() => {
        setResultado(respuesta.data.DISPLAY[criptomoneda][moneda]);
        setCargando(false);
      }, 3000);
    };
    CotizarCripto();
  }, [moneda, criptomoneda]);

  const spinner = cargando ? <Spinner /> : <Cotizacion resultado={resultado} />;

  return (
    <Contenedor>
      <div>
        <Image src={image} alt="imagen" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario setMoneda={setMoneda} setCriptomoneda={setCriptomoneda} />
        {spinner}
      </div>
    </Contenedor>
  );
};

export default App;
