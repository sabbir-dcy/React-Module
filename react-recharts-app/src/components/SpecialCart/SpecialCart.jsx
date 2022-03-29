import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const SpecialCart = () => {
  const [phones, setPhone] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((res) => {
        const response = res.data.data;
        const phoneData = response.map((phone) => {
          const parts = phone.slug.split("-");
          const phn = {
            name: parts[0],
            value: parseInt(parts[1]),
          };
          return phn;
        });
        setPhone(phoneData);
        console.log(phoneData);
      });
  }, []);
  return (
    <BarChart width={800} height={440} data={phones}>
      <Bar dataKey="value" fill="#8884d8" />
      <XAxis dataKey={"name"}></XAxis>
      <Tooltip></Tooltip>
      <YAxis></YAxis>
    </BarChart>
  );
};

export default SpecialCart;
