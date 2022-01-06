import React from "react"
import I1 from "./images/Vector-Location.jpg"
export default function Card(props)
{
    console.log(props.img)
    return(
        <div className="card">
            <div className="inner">
               <img src={props.img} alt={props.title} className="card--icon"/>
              <div className="card--data">
                  <div className="locate">
                   <img src={I1} alt="locationicon" className="locate-icon"></img>
                   <p>{props.location}</p>
                   <a href={props.googlemap} target="_blank" rel="noreferrer">Map View</a>
                  </div>
                  <h1 className="heading1">{props.title}</h1>
                  <p className="dates"><b>{props.sdate} - {props.edate}</b></p>
                  <p className="main--body">{props.description}</p>
              </div>
            </div>

        </div>
    )
}