import React from 'react';
import './Entry.css';

const Entry = props => {
  return (
    <div
      style={props.style}
      className="entry"
    >
      <button
        className="removeEntry"
        onClick={(e) => {props.removeMeetingSectionData({ id: props.id }, "clicked")}}
      >x</button>
      <p className="entryText courseCode">{props.courseCode}</p>
      <p className="entryText">{props.code}</p>
    </div>
  )
}

export default Entry
