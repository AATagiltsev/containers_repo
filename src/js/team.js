export default class Team {

    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Дублирование!!!');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach((i) => this.members.add(i));
    }

    toArray() {
        return Array.from(this.members);
    }
}