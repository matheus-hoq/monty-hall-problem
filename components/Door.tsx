import styles from "../styles/Door.module.css"
import DoorModel from "../model/door"

interface DoorProps {
    value: DoorModel
}

export default function Porta (props: DoorProps) {
    const door = props.value
    const selected = door.selected ? styles.selected : ''

    return (
        <div className={styles.area}>
            <div className={`${styles.frame} ${selected}`}>
                <div className={styles.door}>
                    <div className={styles.number}>{door.number}</div>
                    <div className={styles.knob}></div>
                </div>
            </div>
            <div className={styles.floor}></div>
        </div>        
    )
}