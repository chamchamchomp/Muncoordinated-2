import React from "react";
import CurrentSpeaker from "./moderated/CurrentSpeaker";
import CaucusTimer from "./moderated/CaucusTimer";
import NextSpeaker from "./moderated/NextSpeaker";
import SpeakerTimer from "./moderated/SpeakerTimer";
import CaucusName from "./moderated/CaucusName";
import munlogo from "./assets/Logo.png";
import "./assets/mod.css";
import { CaucusData, SpeakerEvent } from "../../models/caucus";
import _ from "lodash";
import BackgroundAnimDark from "./standardDis";

export type ModeratedProps = CaucusData;

export default function Moderated(props: ModeratedProps) {
  return (
//  <div style={{ minHeight: '100vh', height: '100%', 'background': '#023E8A' }}>
      // <div className="Modflex">
      //   <div className="caucuspres">
      //     <CaucusTimer {...props.caucusTimer} />
      //     <NextSpeaker {..._.cloneDeep(props.queue)} />
      //   </div>
      //   <div className="speakerpres">
      //     <CurrentSpeaker {...props.speaking} />
      //     <div className="speakertimerpres">
      //       <SpeakerTimer {...props.speakerTimer} />
      //     </div>
      //   </div>
      //   <div className="topicpres">
      //     <CaucusName name={props.name} />
      //   </div>
      //   <div className="logopres">
      //     <img className="modmunlogo" src={munlogo} alt="MMUN 2023 logo" />
      //   </div>
      // </div>
      // <BackgroundAnimDark />
//   <div/>
<div style={{ minHeight: '100vh', height: '100%', 'background': '#023E8A' }}>
  <div className="Modflex">
        <div className="caucuspres">
          <CaucusTimer {...props.caucusTimer} />
          <NextSpeaker {..._.cloneDeep(props.queue)} />
        </div>
        <div className="speakerpres">
          <CurrentSpeaker {...props.speaking} />
          <div className="speakertimerpres">
            <SpeakerTimer {...props.speakerTimer} />
          </div>
        </div>
        <div className="topicpres">
          <CaucusName name={props.name} />
        </div>
        <div className="logopres">
          <img className="modmunlogo" src={munlogo} alt="MMUN 2023 logo" />
        </div>
      </div>
  <BackgroundAnimDark />
</div>
  );
}
