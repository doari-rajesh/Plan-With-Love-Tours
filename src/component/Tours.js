import React from "react";
import Card from "./Card";

const Tours = ({ tours, removeTour }) => {
  console.log("Tours");
  return (
    <div className="container">
      <div>
        <h1 className="title">Plan With Love</h1>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Card  {...tour} removetour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
