import styled from "@emotion/styled";
import image from "./cryptomonedas.png";

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
  @media (min-width: 400px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const App = () => {
  return (
    <Contenedor>
      <div>
        <Image src={image} alt="imagen" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
      </div>
    </Contenedor>
  );
};

export default App;
