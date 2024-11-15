import React from "react";
import "./assets/standard.css";


export default function standardDis() {
  return (
    <>
        <div id="blur_parent">
            <div className="blur" id="main"></div>
            <div className="blur" id="b1"></div>
            <div className="blur" id="b2"></div>
            <div className="blur" id="b3"></div>
            <div className="blur" id="b4"></div>
            <div className="blur" id="b5"></div>
            <div className="blur" id="b6"></div>
            <div className="blur" id="b7"></div>
            <div className="blur" id="v1"></div>
            <div className="blur" id="v2"></div>
            <div className="blur" id="v3"></div>
            <div className="blur" id="v4"></div>
        </div>
        <div id="blackhole"></div>
        <div id="color_parent">
            <div id="color1"></div>
            <div id="color2"></div>
            <div id="color3"></div>
        </div>
        <div id="mask"></div>
    </>
  );
}
