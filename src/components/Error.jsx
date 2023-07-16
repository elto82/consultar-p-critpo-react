import styled from "@emotion/styled";

const MensajeError = styled.p`
  background-color: #b7322c;
  color: #fff;
  padding: 16px;
  font-size: 24px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
const Error = ({ mensaje }) => {
  return <MensajeError>{mensaje}</MensajeError>;
};

export default Error;
