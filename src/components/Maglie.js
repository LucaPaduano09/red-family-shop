import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Maglie = () => {
  const [prodotti, setProdotti] = useState([])
    const requestOption = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
      };
      useEffect(()=>{
        async function getProducts(){
            const response = await fetch("https://red-family-shop.herokuapp.com/prodotti/",requestOption);
            if(!response.ok){
              window.alert("error occured")
            }
            let result = await response.json();
            setProdotti(result);
        }
        getProducts()
    },[prodotti.lenght])
  return (
    <Container>
       {prodotti.map((prodotto,index)=>(
        <Link 
        key={index}
        to={`/maglie-details/`+ prodotto._id}>
          <img src={prodotto.prodotti_image}/>
          <h1>{prodotto.prodotti_name}</h1>
          <p>{prodotto.prodotti_desc}</p>
          <p>{prodotto.prodotti_price} €</p>
      </Link>
      ))} 
     

    </Container>
  );
};

export default Maglie;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    text-decoration: none;
    color:black;
  }
  a > img{
    width:350px;
    height:350px;
    transition:all 0.3s ease-in-out;
  }
  a > img:hover{
    transform:scale(1.1)
  }
`;

const ItemContainer = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease-in-out;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
