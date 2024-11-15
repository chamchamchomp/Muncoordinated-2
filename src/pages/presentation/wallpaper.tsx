import "./assets/standard.css";
import "./assets/wallpaper.css";

import Logo from "./assets/Logo.png";

export default function wallpaper() {
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
        <div id="textblurmain">
            <div className="textblur" id="t12"></div>
            <div className="textblur" id="t11"></div>
            <div className="textblur" id="t10"></div>
            <div className="textblur" id="t9"></div>
            <div className="textblur" id="t8"></div>
            <div className="textblur" id="t7"></div>
            <div className="textblur" id="t6"></div>
            <div className="textblur" id="t5"></div>
            <div className="textblur" id="t4"></div>
            <div className="textblur" id="t3"></div>
            <div className="textblur" id="t2"></div>
            <div className="textblur" id="t1"></div>
            <div id="year"><span className="l1">2</span><span className="l2">0</span><span className="l3">2</span><span className="l4">4</span></div>
            <div id="yearshadow"><span className="l1">2</span><span className="l2">0</span><span className="l3">2</span><span className="l4">4</span></div>
        </div>
        <div id="title">
            <h1 id="text1">Strategic Collaborations for</h1>
            <h1 id="text2">a Sustainable Planet</h1>
            <h1 id="text3">Global Commitment to <b>the SDG</b></h1>
        </div>
        <div id="logo">
            <img src={Logo}/>
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
