import { useState } from "react"
import Gift from "../components/Gift"
import Door from "../components/Door"
import DoorModel from "../model/door"
import { createDoors } from "../functions/doors"

export default function Home() {
  const [doorOne, setDoorOne] = useState(new DoorModel(1))
  const [doorTwo, setDoorTwo] = useState(new DoorModel(2))
  const [doorThree, setDoorThree] = useState(new DoorModel(3))

  console.log(createDoors(3, 2))

  return (
    <div style={{display: "flex"}}>
      <Door value={doorOne} onChange={newDoor => setDoorOne(newDoor)} />
      <Door value={doorTwo} onChange={newDoor => setDoorTwo(newDoor)} />
      <Door value={doorThree} onChange={newDoor => setDoorThree(newDoor)} />
    </div>
  )
}
