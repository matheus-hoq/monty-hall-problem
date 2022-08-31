import styles from "../../../styles/Game.module.css"
import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/doors";
import Link from "next/link"
import { useRouter } from "next/router";

export default function Game() {

  const router = useRouter()

  const [valid, setValid] = useState(false);
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const doors = +router.query.doors
    const haveGift = +router.query.haveGift

    const validDoorsAmount = doors >= 3 && doors <= 100
    const haveValidGift = haveGift >= 1 && haveGift <= doors

    setValid(validDoorsAmount && haveValidGift)
  }, [doors])

  useEffect(() => {
    const doors = +router.query.doors
    const haveGift = +router.query.haveGift
    setDoors(createDoors(doors, haveGift))
  }, [router?.query])

  // +router.query.doors
  // +router.query.haveGift

  function renderDoors() {
    return doors.map((door) => {
      return (
        <Door
          key={door.number}
          value={door}
          onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
        />
      );
    });
  }

  return (

    <div className={styles.jogo}>
      <div className={styles.doors}>
        {valid ? 
          renderDoors() :
          <h2>Valores inválidos</h2>
        }
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reiniciar</button>
        </Link>
      </div>
    </div>
  )
}
