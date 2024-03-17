import React from "react";
import { useState,useEffect } from "react";

export default function Card() {
  const [value, setValue] = useState(0);
  const [state, setState] = useState("Off");
  const [currentColorIndex, setCurrentColorIndex] = useState(0); 
  const [temperature, setTemperature] = useState(16);
  const [temperatureRange, setTemperatureRange] = useState({ min: 16, max: 30 });

  useEffect(() => {
    fetch('https://kodessphere-api.vercel.app/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTemperatureRange({ min: data.minTemp, max: data.maxTemp });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const change = () => {
    if (value < 5) {
      setValue(value + 1);
    } else {
      setValue(0);
    }
  };

  const toggleState = () => {
    setState(state === "Off" ? "On" : "Off");
  };


    const colors = [
        { name: "Red", value: "#FF0000" },
        { name: "Green", value: "#00FF00" },
        { name: "Blue", value: "#0000FF" },
        { name: "Yellow", value: "#FFFF00" },
        { name: "White", value: "#FFFFFF" }
    ];


    const changeColor = () => {
        if (currentColorIndex < 4) {
            setCurrentColorIndex(currentColorIndex + 1);
        } else {
            setCurrentColorIndex(0);
        }
    }

    const changeTemperature = () => {
        if (temperature < 30) {
          setTemperature(temperature + 1);
        } else {
          setTemperature(16);
        }
      };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card h-100 ">
            <img
              src="./fan.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Fan</h5>
              <p className="card-text">control the speed of the fan</p>
              <div></div>
            </div>
            <button className="btn btn-light my-3 mx-3" onClick={change}>
              Speed: {value}
            </button>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="./bulb.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Bulb</h5>
              <p className="card-text">Turn On/Off the Bulb</p>
            </div>
            <button className="btn btn-light my-3 mx-3" onClick={toggleState}>
              {state === "On" ? "Off" : "On"}
            </button>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="./led.png" className="card-img-top img-fluid .25rem" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Led</h5>
              <p className="card-text">control the color of the led</p>
            </div>
            <button
              className="btn btn-light my-3 mx-3" style=
              {{ backgroundColor: colors[currentColorIndex].value }}
              onClick={changeColor}
              >
              {colors[currentColorIndex].name}
            </button>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="./ac.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Air Conditioner</h5>
              <p className="card-text">Contol state & temp of Ac</p>
            </div>
            <button className="btn btn-light my-2 mx-3" onClick={toggleState}> {state === "On" ? "Off" : "On"}</button>
            <button className="btn btn-light my-2 mx-3" onClick={changeTemperature}>Temperature: {temperature}</button>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}
