import { Character } from "./Character";

export class Swordsman extends Character {
    constructor(name) {
        super(name, 'Bowman')
        this.attack = 40
        this.defence = 10
    }
}