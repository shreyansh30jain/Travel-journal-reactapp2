import React from "react"
import Data from "./components/data"
import Card from "./components/card"
import Navbar from "./components/navbar"
export default function App(){
  const info = Data.map(item => {
    return(
      <Card
      key = {item.id}
      img = {item.imageUrl}
      location = {item.location}
      googlemap = {item.googleMapsUrl}
      title = {item.title}
      sdate = {item.startDate}
      edate = {item.endDate}
      description = {item.description}
      />
    )
  })
  return(
    <div>
      <Navbar/>
      {info}
    </div>
  )
}