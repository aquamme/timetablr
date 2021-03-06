import React from "react";
import "./Shortlist.css"
import ShortlistEntry from "./ShortlistEntry/ShortlistEntry.js"
import { CSSTransitionGroup } from "react-transition-group"

const Shortlist = props => {

  const shortlistResults = props.shortlist.map(eachResult =>
    <ShortlistEntry
      key={eachResult.code}
      code={eachResult.code}
      name={eachResult.name}
      description={eachResult.description}
      ms_data={eachResult.ms_data}
      term={eachResult.term}
      addMeetingSectionData={props.addMeetingSectionData}
      removeMeetingSectionData={props.removeMeetingSectionData}
      removeFromShortlist={props.removeFromShortlist}
      meetingSectionData={props.meetingSectionData}
      setEntryHovered={props.setEntryHovered}
      entryHovered={props.entryHovered}
    />
  )

  return (
    <div id="shortlist">
      <p>SHORTLIST</p>
      <div className="shortlistResults">
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={260}>
          {shortlistResults}
        </CSSTransitionGroup>
      </div>
    </div>
  )

}

export default Shortlist;
