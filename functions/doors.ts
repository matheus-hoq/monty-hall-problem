import DoorModel from "../model/door"

export function createDoors(amount: number, selected: number): DoorModel[] {
    return Array.from({ length: amount }, (_, i) => {
        const number = i + 1
        const haveGift = number === selected
        return new DoorModel(number, haveGift)
    })
}