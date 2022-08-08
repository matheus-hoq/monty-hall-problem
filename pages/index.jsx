import { useState } from "react"
import Gift from "../components/Gift"
import Door from "../components/Door"
import DoorModel from "../model/door"

export default function Home() {
  const [doorOne, setDoorOne] = useState(new DoorModel(1))

  return (
    <div style={{display: "flex"}}>
      <Door door={doorOne} />
    </div>
  )
}
