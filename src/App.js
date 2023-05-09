import React, { useState } from "react";
import Tours from "./component/Tours";
import data from "./data";

const App = () => {
  console.log("App");
  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    console.log('remove-called');
    const newTour = tours.filter(tour =>  tour.id !== id);
    console.log(newTour);
    setTours(newTour);

  };
  const refreshHandler=()=>{
    setTours(data)
  }

  if(tours.length===0){
    return (
      <div className="refresh">
       <h2> No Tours left</h2>
        <button className="btn-white"  onClick={refreshHandler}>Refresh</button>
      </div>
    )
  }
  return <Tours tours={tours} removeTour={removeTour} />;
};

export default App;
