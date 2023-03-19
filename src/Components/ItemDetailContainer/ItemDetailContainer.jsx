import React from "react";

import { useParams } from "react-router-dom";

import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} productos `);
  };

  return (
    <div
      style={{
        width: "100%",
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          margin: "1vh",
        }}
      >
        {productSelected.title}
      </h1>
      <img
        style={{
          width: "40%",
          maxHeight: "85vh",
          textAlign: "center",
          alignItems: "center",
          margin: "auto",
        }}
        src={productSelected.img}
        alt=""
      />
      <ItemCount stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
