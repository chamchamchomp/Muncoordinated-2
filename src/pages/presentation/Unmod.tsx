import React from "react";
import { TimerData } from "../../models/time";
import { secondsToHumanReadableFormat } from "../../utils";
import BackgroundAnim from "./standardDis";
import "./assets/unmod.css";
export type UnmodProps = TimerData;

export default function Unmod(props: UnmodProps) {
  return (
    <div style={{ minHeight: '100vh', height: '100%', 'background': '#023E8A' }}>
      <div className="muntimediv">
        <h2 className="muntime">
          {secondsToHumanReadableFormat(props.remaining)}
        </h2>
      </div>
      <div className="redundantpos">
        <h3 className="muntitle">Unmoderated Caucus</h3>
      </div>
      <BackgroundAnim />
    </div>
    // <>
      // <BackgroundAnim />
      // <div className="redundantpos">
      //   <h3 className="muntitle">Unmoderated Caucus</h3>
      //   <div className="muntimediv">
      //     <h2 className="muntime">
      //       {secondsToHumanReadableFormat(props.remaining)}
      //     </h2>
      //   </div>
      // </div>
    // </>
  );
}
