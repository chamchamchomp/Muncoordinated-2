import React from "react";
import { TimerData } from "../../../models/time";
import { secondsToHumanReadableFormat } from "../../../utils";
export type CaucusTimerProps = TimerData;

export default function CaucusTimer(props: CaucusTimerProps) {
  return (
    <>
      <div>
        <h2 className="Caucustext">Next Speaker</h2>
        <div className="muntimediv timerstyle Caucusdata" id="caucus">
          <h3>{secondsToHumanReadableFormat(props.remaining)}</h3>
        </div>
      </div>
    </>
  );
}
