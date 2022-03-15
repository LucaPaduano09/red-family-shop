import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";

const Carrello = () => {
    const carrello = useSelector((state) =>state.cart);
    const prodotti = carrello.products;
    const dispatch = useDispatch();
    const handleClick = (prodotto) =>{
        dispatch(removeFromCart(prodotto))
    }
    return(
        <Container>
            <ItemLeft>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Immagine
                            </th>
                            <th>
                                Nome
                            </th>
                            <th>
                                Descrizione
                            </th>
                            <th>
                                Prezzo
                            </th>
                            <th>
                                Azioni
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       {prodotti.map((prodotto,index)=>(
                           <tr key={index}>
                               <td>
                                   <img src="./images/redd.png" alt="image"/>
                               </td>
                               <td style={{marginRight:"10px"}}>
                                   {prodotto.prodotti_name}
                               </td>
                               <td>
                                   {prodotto.prodotti_desc}
                               </td>
                               <td>
                                   {prodotto.prodotti_price}
                               </td>
                               <td>
                                   <button onClick={() => handleClick(prodotto)}>C</button>
                               </td>
                           </tr>
                       ))}
                    </tbody>
                </table>

            </ItemLeft>
            <ItemRight>
                <h1>SUBTOTALE: {carrello.total}</h1>
                <h1>SCONTO: 0.00</h1>
                <h1>TOTALE: {carrello.total}</h1>
                <button>Procedi al pagamento</button>
            </ItemRight>
        </Container>
    )
}

export default Carrello;

const Container = styled.div`
    position:relative;
    // height: calc(100vh - 80px);
    width:100vw;
    display:flex;
    align-items:flex-start;
    justify-content:center;
    background-color:black;
    min-height: calc(100vh - 80px);
`

const ItemLeft = styled.div`
    position:relative;
    height:100%;
    width:60%;
    margin-top:15px;
    // background-color:yellow;
    display:flex;
    color:white;
    align-items:center;
    justify-content:space-evenly;
    flex-direction:column;
    
    table{
        position:relative;
        width:100%;
        height:100%;
        
        tbody{
            img{
                height:200px;
            }
        }
    }

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
        font-size:3vw;
        text-align:left;
        margin-left:15px;
    }
    h1::after{
        content: "€";
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