export class Character {
    constructor(name, type) {
        const allowedTypes = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
        ];
        if (typeof name !== 'string' || name.length < 2 || name.length > 10 ) {
            throw new Error('Имя введено не правильно, оно должно быть строкой и иметь длину от 2 - 10 символов')
        }
        if (!allowedTypes.includes(type)) {
            throw new Error(`Неправильный тип: ${type}`)
        }
        this.name = name
        this.type = type
        this.health = 100
        this.level = 1
        this.attack = undefined
        this.defence = undefined
    }
    levelUp() {
        if( this.health  === 0 ) {
            throw new Error('Нельзя повысить уровень умершего персонажа')
        }
        this.level += 1
        this.attack *= 1.2
        this.defence *= 1.2
        this.health = 100
    }
    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
            if (this.health < 0) {
                this.health = 0
            }
        }
}
}
