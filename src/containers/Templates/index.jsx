import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import "./global.css";

const Content = styled.section`
  width: 100%;
  margin-top: 70px;
`;

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
