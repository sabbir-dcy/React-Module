import React from "react";

const OrderList = (props) => {
  const { orders } = props;
  const sum = orders.reduce((count, obj) => count + obj.quantity, 0);

  return (
    <div>
      <h2>Order List</h2>
      <h4>Items Ordered: {sum}</h4>
    </div>
  );
};

export default OrderList;
