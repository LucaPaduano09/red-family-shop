import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Container>
      <MainItemContainer>
        <Link to={"/maglie"}>
          <h1>T-SHIRTS</h1>
          <button>+</button>
          <p>Compra Ora</p>
        </Link>
      </MainItemContainer>

      <SecondaryItemsContainer>
        <SecondaryItem>
          <Link to={"/"}>
            <h1>CAPPELLI</h1>
            <button>+</button>
            <p>Compra Ora</p>
          </Link>
        </SecondaryItem>
        <SecondaryItem>
          <Link to={"/"}>
            <h1>ACCESSORI</h1>
            <button>+</button>
            <p>Compra Ora</p>
          </Link>
        </SecondaryItem>
      </SecondaryItemsContainer>

      <LoginBanner>
        <p>L</p>
        <p>O</p>
        <p>G</p>
      </LoginBanner>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  width: 100vw;
  // background-color:red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainItemContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  a {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration:none;
    color:black
  }
  button {
    height: 40px;
    width: 40px;
    background-color: transparent;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    display: none;
  }
  :hover {
      opacity:96%;
    button {
      display: block;
    }
  }
`;

const SecondaryItemsContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // background-color:yellow;
  a {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration:none;
    color:black
  }
`;
const SecondaryItem = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  :first-child {
    border-bottom: 2px solid white;
  }
  :hover {
      opacity:96%;
    button {
      display: block;
    }
  }

  button {
    height: 40px;
    width: 40px;
    background-color: transparent;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    display: none;
  }
`;
const LoginBanner = styled.div`
    position:absolute;
    top:50%;
    left:0;
    width:20px;
    height:130px;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;
    transition: all 0.2s ease-in-out;
    border-top-right-radius:20px;
    border-bottom-right-radius:20px;
    p{
        position:relative;
        line-height:1px;s
        margin-bottom:-100px;
    }
    :hover{
        transform: scale(1.1);
    }
`;
