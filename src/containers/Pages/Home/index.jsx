import React from "react";
import MainLayout from "../../Templates";
import styled from "styled-components";
import { Color } from "Utils";
import { Button } from "Components";

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    font-size: 2.5em;
    color: ${Color.dark};
    margin-bottom: 10px;
    font-weight: bold;
  }
  button {
    margin-top: 20px;
  }
`;
const Home = () => {
  return (
    <MainLayout>
      <Wrapper>
        <div>
          <h1>WELCOME TO REACT</h1>
          <h4>Boilerplate Using Create React App</h4>
        </div>
        <Button>GETTING STARTED</Button>
      </Wrapper>
    </MainLayout>
  );
};

export default Home;
