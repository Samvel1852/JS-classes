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

// class CoffeeShop {
//   constructor(name, menu, orders) {
//     this.name = name;
//     this.menu = menu;
//     this.orders = orders;
//   }
//   addOrder(itemName) {
//     if (this.menu.includes(itemName)) {
//       this.orders.push(itemName);
//     } else {
//       return "This item is currently unavailable";
//     }
//   }
// }

function CoffeeShop(name, menu, orders) {
  this.name = name;
}

// let obj = {
//   _name: "Arsen",
//   get name() {
//     return this._name;
//   },
//   set name(name) {
//     if (typeof name !== "string") {
//       throw new Error("not string");
//     } else {
//       this._name = name;
//     }
//   },
// };

// obj.name = "Valod";

// console.log(obj.name);
