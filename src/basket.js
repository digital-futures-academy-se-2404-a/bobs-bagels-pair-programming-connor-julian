/* Object Constructor, declare all properties of the object "basket"
* @type { Object }
*/
const basket = {
    addItem: function (item) {
        this.basketItems.push(item);
    },
    basketItems: [],
};

export default basket;