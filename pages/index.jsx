import { useState } from "react"
import Gift from "../components/Gift"
import Door from "../components/Door"
import DoorModel from "../model/door"

export default function Home() {
  const [doorOne, setDoorOne] = useState(new DoorModel(1))
  const [text, setText] = useState("...")

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <input type="text" value={text} onChange={e => setText(e.target.value)}/>
      <Door value={doorOne}/>
    </div>
  )
}
