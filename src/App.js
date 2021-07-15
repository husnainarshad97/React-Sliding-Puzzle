import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers";
import car from "./car.svg";
import wheel from "./wheel.svg";

function App() {
  const [imgUrl, setImgUrl] = useState("");
  const [size, setSize] = useState(3);

  const gridsizeupdate = () => {
    console.log(size);
    localStorage.setItem("GridSizeHasnain", size);
    window.location.reload();
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"));
    }
  }, []);

  const handleImageChange = (e) => {
    setImgUrl(e.target.value);
    window.history.replaceState(
      "",
      "",
      updateURLParameter(window.location.href, "img", e.target.value)
    );
  };

  return (
    <div className="App">
      <div id="seconddiv">
        {" "}
        <p>Enter any image address to make puzzle of it</p>
        <input
          value={imgUrl}
          placeholder="Enter image address"
          onChange={handleImageChange}
        />
      </div>
      <div id="onediv">
        {" "}
        <h2>Alpha Squad Task</h2>
        <input
          placeholder="Enter Grid Size"
          type="number"
          onChange={(e) => setSize(e.target.value)}
        />
        <button onClick={gridsizeupdate}>Submit </button>
        <Board imgUrl={imgUrl} SizeGrid={size} />{" "}
      </div>

      <div className="highway"></div>
      <div className="car">
        <img className="carr" style={{ height: "5rem" }} src={car} alt="" />

        <div className="wheel">
          <img className="right" src={wheel} alt="" />
          <img className="left" src={wheel} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
