import styled from "@emotion/styled";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  border-radius: 10px;
  width: 100%;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #66a2e2;
    cursor: pointer;
    color: #000;
  }
`;
const Formulario = () => {
  return (
    <form>
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
