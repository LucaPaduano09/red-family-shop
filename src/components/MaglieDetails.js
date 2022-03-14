import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const MaglieDetails = () =>{
    const dispatch = useDispatch();
    const [prodotto, setProdotto] = useState({});
    const urlQueryString = window.location.pathname;
    const id = urlQueryString.replace("/maglie-details/","");
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
    function handleClick(prodotto){
        dispatch(addToCart(prodotto))
    }
    
    useEffect(()=>{
        async function getProduct(){
            const response = await fetch("https://red-family-shop.herokuapp.com/prodotti/" + id,requestOption);
            if(!response.ok){
                window.alert("errore nel fetch");
            }
            const result = await response.json();
            // console.log(result);
            setProdotto(result);
            // console.log(prodotto)
        }
        getProduct()
    },[])
    return(
        <Container>
            <ItemLeft>
                <img src={"." + prodotto.prodotti_image}/>
                <Colors>
                    <div>

                    </div>
                    <div>

                    </div>
                </Colors>
            </ItemLeft>
            <ItemRight>
                <h1>{prodotto.prodotti_name}</h1>
                <p>{prodotto.prodotti_desc}</p>
                <p>{prodotto.prodotti_price}€</p> 
                <button onClick={() => handleClick(prodotto)}>Aggiungi al Carrello</button>
            </ItemRight>
        </Container>
    )
}

export default MaglieDetails;

const Container = styled.div`
    position:relative;
    height: calc(100vh - 80px);
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:black;
`

const ItemLeft = styled.div`
    position:relative;
    height:100%;
    width:60%;
    background-color:yellow;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-direction:column;

    img{
        height:450px;
        transition:all 0.3s ease-in-out
        
    }
    img:hover{
        transform: scale(1.1);
    }
`

const ItemRight = styled.div`
    position:relative;
    height:100%;
    width:40%;
    color:white;
    background-image: linear-gradient(to right, #0f0f11ea, transparent);

    h1{
        font-size:5vw;
        text-align:left;
        margin-left:15px;
    }
    p{
        font-size: 1vw;
        text-align:left;
        margin-left:15px;
    }
    button{
        margin-top:200px;
        width:300px;
        cursor:pointer;
    }

`

const Colors = styled.div`
    position:relative;
    width:50%;
    height:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    div{
        position:relative;
        height:15px;
        width:15px;
        background-color:white;
        margin-left:10px;
        cursor:pointer;
    }

    div:first-child{
        background-color:black
    }
`