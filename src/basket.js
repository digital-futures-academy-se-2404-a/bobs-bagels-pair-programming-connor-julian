/* Object Constructor, declare all properties of the object "basket"
* @type { Object }
*/
const basket = {
    basketItems: [],
    addItem: function (item) {
        (item !== null) && this.basketItems.push(item);
    },
    removeItem: function (item) {
        let indexForRemoval = this.basketItems.indexOf(item);
        (indexForRemoval !== -1) && this.basketItems.splice(indexForRemoval, 1);
    }
};

export default basket;