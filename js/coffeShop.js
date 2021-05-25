// CoffeeShop
// Properties:
// * name: a string (basically, of the shop)
// * menu: an array of items (of object type), with each item containing the item (name of the item), type
// * (whether food or a drink) and price.
// * orders: an empty array
// Methods:
// * addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise,
// * return "This item is currently unavailable!"
// * fulfillOrder: if the orders array is not empty,return "The {item} is ready!". If the orders array is
// * empty,return "All orders have been fulfilled!" listOrders:returns the list of orders taken, otherwise, an
// * empty array.
// * dueAmount:returns the total amount due for the orders taken.
// * cheapestItem:returns the name of the cheapest item on the menu.
// * drinksOnly:returns only the item names of type drink from the menu.
// * foodOnly:returns only the item names of type food from the menu.
// * IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

class CoffeeShop {
  fulFills = [];
  ordersAmount = 0;
  constructor(name, menu, orders) {
    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }

  addOrder(itemName) {
    let objIndex;
    if (
      this.menu.some((item, index) => {
        objIndex = index;
        return item.name === itemName;
      })
    ) {
      this.orders.push([itemName, this.menu[objIndex]]);
    } else {
      return "This item is currently unavailable";
    }
  }

  fulFillOrders() {
    if (this.orders.length > 0) {
      let currentItem = this.orders.shift();
      this.fulFills.push(currentItem);
      return `${currentItem[0]} is ready`;
    } else {
      return `All orders have been fulfilled - ${this.fulFills}`;
    }
  }

  dueAmount() {
    for (let i = 0; i < this.orders.length; i += 1) {
      this.ordersAmount += this.orders[i][1].price;
    }
    return this.ordersAmount;
  }

  cheapestItem() {
    let sortedMenu = this.menu;
    sortedMenu.sort((a, b) => (a.price < b.price ? -1 : 1));
    return sortedMenu[0].name;
  }

  drinksOnly() {
    let filteredMenu = this.menu;
    filteredMenu = filteredMenu.filter((item) => item.type === "drink");
    return filteredMenu;
  }

  foodOnly() {
    let filteredMenu = this.menu;
    filteredMenu = filteredMenu.filter((item) => item.type === "food");
    return filteredMenu;
  }
}

let house = new CoffeeShop(
  "House",
  [
    { name: "Tea", type: "drink", price: 200 },
    { name: "Coffee", type: "drink", price: 150 },
    { name: "Hot dog", type: "food", price: 250 },
  ],
  []
);

// CoffeeShop.prototype

console.log(house);
house.addOrder("Tea");
house.addOrder("Coffee");
console.log(house.addOrder("esim inch"));
console.log(house);
console.log(house.fulFillOrders());
// console.log(house.fulFillOrders());
// console.log(house.fulFillOrders());
console.log(house.dueAmount());
console.log(house.cheapestItem());
console.log(house.drinksOnly());
console.log(house.foodOnly());
