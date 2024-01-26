import React from "react";

const Event = (props) => {
    return (
        <td className={'Event ' + props.color}>
            <h3>{props.event}</h3>
            <img src={props.img} alt={props.event} width='200px' height='200px' />
            <h4>{props.location}</h4>
            <h4>{props.time}</h4>
            <a href={props.link} target="_blank" rel="noopener noreferrer" class="browna">More info... 🔎</a>
        </td>
    )
}

export default Event;