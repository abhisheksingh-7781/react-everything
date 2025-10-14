import React from 'react'
import { Bookmark } from "lucide-react";
const Cards = (props) => {

    console.log(props.company);
    
  return (
    <>
        <div className="card">
        <div className="top">
          <img
            src={props.logo}
            alt=""
          />
          <button>
            save <Bookmark strokeWidth={1.25} size={14} />{" "}
          </button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.posted}</span></h3>

          <h2>{props.position}</h2>
          <div className="tag">
            <h4>{props.workMode}</h4>
            <h4>{props.jobType}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.payRate}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </>
  )
}

export default Cards