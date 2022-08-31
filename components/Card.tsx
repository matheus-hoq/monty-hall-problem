import styles from "../styles/Card.module.css"

interface CardsProps {
    bgcolor?: string
    children?: any
}

export default function Card(props: CardsProps) {
    return (
        <div className={styles.card}
        style={{
            backgroundColor: props.bgcolor ?? "#fff"
        }}>
            {props.children}
        </div>
    )
}