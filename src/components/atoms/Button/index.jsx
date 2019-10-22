import styled from "styled-components";
import { Color } from "Utils";

const Button = styled.button`
  border: none;
  background: ${Color.dark};
  border-radius: 5px;
  padding: 10px 16px;
  color: ${Color.primary};
  outline: none;
  cursor: pointer;
  transition: ease 0.3s all;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  }

  /* Type Color */
  ${({ primary }) =>
    primary &&
    `
    background-color: ${Color.primary};
    border: 1.5px solid ${Color.primary};
    color: #fff;
  `}

  ${({ danger }) =>
    danger &&
    `
      background-color: ${Color.danger};
      border: 1.5px solid ${Color.danger};
      color: #fff;
    `}
  
  ${({ warning }) =>
    warning &&
    `
      background-color: ${Color.warning};
      border: 1.5px solid ${Color.warning};
      color: #fff;
    `}

  ${({ info }) =>
    info &&
    `
      background-color: ${Color.info};
      border: 1.5px solid ${Color.info};
      color: #fff;
    `}

/* Bordered */

  ${({ bordered }) =>
    bordered === "primary" &&
    ` color: ${Color.primary};background: none;
  `}
  ${({ bordered }) =>
    bordered === "danger" &&
    ` color: ${Color.danger};background: none;
  `}
  ${({ bordered }) =>
    bordered === "warning" &&
    ` color: ${Color.warning};background: none;
  `}
  ${({ bordered }) =>
    bordered === "info" &&
    ` color: ${Color.info};background: none;
  `}

  /* Block */
  ${({ block }) => block && `width: 100%;`}
`;

export default Button;
