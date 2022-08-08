import Porta from "../components/Door"

export default class Door {
    #number
    #haveGift
    #selected
    #open

    constructor (number, haveGift = false, selected = false, open = false) {
        this.#number = number
        this.#haveGift = haveGift
        this.#selected = selected
        this.#open = open
    }

    get number() {
        return this.number
    }

    get haveGift() {
        return this.haveGift
    }

    get selected() {
        return this.selected
    }

    get open() {
        return this.open
    }

    unselected() {
        const selected = false
        return new Door(this.number, this.haveGift, selected, this.open)
    }

    toggleSelection() {
        const selected = !this.selected
        return new Door(this.number, this.haveGift, selected, this.open)
    }

    opened() {
        const open = true
        return new Door(this.number, this.haveGift, this.selected, open)
    }
}