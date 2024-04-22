export default class Item {
    #id;
    constructor(newId) {
        this.#id = newId;
    };

    getID() { return this.#id; };

    setID(newId) { this.#id = newId; };
}