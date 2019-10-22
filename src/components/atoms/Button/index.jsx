import styled from "styled-components";
import { Color } from "Utils";

const Button = styled.button`
  border: none;
  background: ${Color.dark};
  border-radius: 4px;
  padding: 10px 16px;
  color: ${Color.primary};
  outline: none;
  cursor: pointer;
  transition: ease 0.3s all;
  &:hover {
    color: ${Color.dark};
    background-color: ${Color.primary};
    transform: translateY(-5px);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  }
`;

export default Button;
