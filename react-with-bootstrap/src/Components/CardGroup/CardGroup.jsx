import React from "react";
import Card from "../Card/Card";

const CardGroup = () => {
  const products = [
    {
      id: 1,
      name: "mac boo1",
      price: 1200,
      img: "https://www.tissotwatches.com/media/catalog/product/cache/aaadd316e453df5b08f7f4246fad1a9c/T/1/T122.417.16.011.00_R_1.png?im=Resize=(1710,1710),aspect=fill;Crop=(0,0,1710,1710),gravity=Center",
    },
    {
      id: 2,
      name: "mac boo2",
      price: 1200,
      img: "https://www.tissotwatches.com/media/catalog/product/cache/aaadd316e453df5b08f7f4246fad1a9c/T/1/T122.423.16.043.00_R_1.png?im=Resize=(490,490),aspect=fill;Crop=(0,0,490,490),gravity=Center",
    },
    {
      id: 3,
      name: "mac boo3",
      price: 1200,
      img: "https://www.tissotwatches.com/media/catalog/product/cache/aaadd316e453df5b08f7f4246fad1a9c/T/1/T109.407.16.031.00_R_1.png?im=Resize=(490,490),aspect=fill;Crop=(0,0,490,490),gravity=Center",
    },
  ];
  return (
    <div>
      <div className="card-group">
        {products.map((pd) => (
          <Card key={pd.id} product={pd}></Card>
        ))}
      </div>
    
    </div>
  );
};

export default CardGroup;
