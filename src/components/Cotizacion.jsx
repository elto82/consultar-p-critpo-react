import styled from "@emotion/styled";
const ResultadoDiv = styled.div`
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Parrafo = styled.p`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;

  span {
    font-weight: normal;
    font-size: 16px;
    color: #fff;
    background-color: #000;
    padding: 5px;
    border-radius: 5px;
    margin-left: auto;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;

  span {
    font-size: 30px;
    color: #fff;
    background-color: #000;
    padding: 5px;
    border-radius: 5px;
    margin-left: auto; /* Al extremo derecho */
    font-size: 30px;
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;
  console.log(resultado);
  return (
    <ResultadoDiv>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Parrafo>
        Precio más alto del día: <span>{resultado.HIGHDAY}</span>
      </Parrafo>
      <Parrafo>
        Precio más bajo del día: <span>{resultado.LOWDAY}</span>
      </Parrafo>
      <Parrafo>
        Variación áltimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>
      </Parrafo>
      <Parrafo>
        Última actualización: <span>{resultado.LASTUPDATE}</span>
      </Parrafo>
    </ResultadoDiv>
  );
};

export default Cotizacion;
