import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width: 100%;
  height: 40px;
  background-color: skyblue;
`;
export default Button;

export const Button1 = styled(Button)`
  font-weight: 600;
  height: 60px;
  background-color: skyblue;
`;
