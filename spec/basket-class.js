export default class Basket {
    #basketItems = [];
    #capacity = 5;

    addItem(item) {
        if (this.getItemCount() >= this.#capacity) {
            return;
        }
        (item !== null) && this.#basketItems.push(item);
    };

    removeItem(item) {
        let indexForRemoval = this.#basketItems.indexOf(item);
        (indexForRemoval !== -1) && this.#basketItems.splice(indexForRemoval, 1);
    };

    getBasketItems() {
        return this.#basketItems;
    }

    getItemCount() { return this.#basketItems.length; };

    setCapacity(newCapacity) {
        if (newCapacity < this.getItemCount()) { console.log("ERROR: Cannot set basket size below current item count"); return; }
        this.#capacity = newCapacity;
    }

    getCapacity() {
        return this.#capacity;
    }
}