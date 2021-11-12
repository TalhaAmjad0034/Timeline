import React, { useState } from "react";
import "./App.css";
import Content from "./Components/Content";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { grey } from "@mui/material/colors";
function App() {
  const [isDown, setIsDown] = useState(false);
  const [start, setStart] = useState(0);
  const [move, setMove] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [scrolled, setScrolled] = useState(0);
  const [total, setTotal] = useState();
  let scrollLeft;

  const mouseDown = (e) => {
    setIsDown(true);
    setStart(e.pageX - e.target.offsetLeft);
    // console.log(start);
    // e.target.scrollLeft = scroll + start * 2;
    setScroll(e.target.scrollLeft);
  };
  const mouseLeave = (e) => {
    setIsDown(false);
  };
  const mouseUp = (e) => {
    setIsDown(false);
  };
  const mouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    // e.stopPropagation();
    // e.stopImmediatePropagation();
    // console.log({ move, start, scrolled });
    setMove(e.pageX - e.target.offsetLeft);
    // console.log({ move, start });
    setScrolled(move - start);
    setTotal(scroll - scrolled);
    // e.target.scrollLeft = total;
    console.log(total);
  };

  return (
    <div className="App">
      <div
        onMouseDown={(e) => mouseDown(e)}
        onMouseLeave={(e) => mouseLeave(e)}
        onMouseUp={(e) => mouseUp(e)}
        onMouseMove={(e) => mouseMove(e)}
        style={{ left: `0px` }}
        className={`forScroll ${isDown ? "active" : ""}`}
        style={{ left: `${total / 10}%` }}
        onTouchStart={(e) => mouseDown(e)}
        onTouchEnd={(e) => mouseUp(e)}
        onTouchMove={(e) => mouseMove(e)}
      >
        <span>1620</span>
        <span>1630</span>
        <span>1640</span>
        <span>1650</span>
        <span>1660</span>
        <span>1700</span>
        <span>1800</span>
        <span>1870</span>
        <span>1900</span>
      </div>
      <span>
        <ArrowDropUpIcon sx={{ color: grey[800] }} />
      </span>
      <Content total={total} />
    </div>
  );
}

export default App;
