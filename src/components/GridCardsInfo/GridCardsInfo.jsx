import { useState, useEffect } from "react";
import Card from "../CardHome/CardHome";
import "./GridCardsInfo.css";

const GridCards = () => {
 
  return (
    <div className="containerCards"> 
      <div className="grid">
        <div className="primeiraLinha">
        <Card
              title={"Marcos dos Santos Bonfim"}
              value={ `Valor de compra: Valor de venda: ` }
              info={`Variação: ${"Namorando, 2 anos. Peixes, Verence"}`}
            ></Card>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
