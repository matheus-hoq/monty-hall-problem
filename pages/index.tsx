import styles from "../styles/Form.module.css"
import Card from "../components/Card"
import Link from "next/link"
import NumericInput from "../components/NumericInput"
import { useState } from "react"

export default function Form() {
  const [doorsAmount, setDoorsAmount] = useState(3)
  const [withGift, setWithGift] = useState(1)

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumericInput text="Qtde Portas?" 
          value={doorsAmount} 
          onChange={newAmount => setDoorsAmount(newAmount)}/>
        </Card>
      </div>
      <div>
        <Card>
          <NumericInput text="Porta com Presente?" 
            value={withGift} 
            onChange={newDoorWithGift => setWithGift(newDoorWithGift)}/>
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${doorsAmount}/${withGift}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
