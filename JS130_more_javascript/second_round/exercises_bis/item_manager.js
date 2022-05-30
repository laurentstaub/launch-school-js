
const ItemManager = {
  items: [],
  create(itemName, category, quantity) {
    let ItemNameNoSpace = itemName.replace(" ", "");
    if (ItemNameNoSpace.length < 5
        || category.split(" ").length >= 2
        || quantity === undefined) {
      return;
    }

    const createCode = () => {
      return (ItemNameNoSpace.slice(0, 3) + category.slice(0, 2)).toUpperCase();
    }

    this.items.push({
      SKUcode: createCode(),
      itemName,
      category,
      quantity
    });
  },

  update(SKUcode, obj) {
    this.items.forEach(item => {
      if (item.SKUcode === SKUcode) {
        for (let prop in obj) {
          item[prop] = obj[prop];
        }
      }
    });
  },

  delete(SKUcode) {
    let index = this.items.findIndex(item => item.SKUcode === SKUcode);
    this.items.splice(index, 1);
  },

  inStock() {
    let objectsInStock = this.items.filter(item => item.quantity > 0);
    let result = [];
    for (let index = 0; index < objectsInStock.length; index += 1) {
      result.push(objectsInStock[index].itemName);
    }

    return result.join(", ");
  },

  itemsInCategory(cat) {
    return this.items.filter(item => item.category === cat);
  },
}

const ReportManager = {
  init(ItemManager) {
    this.items = ItemManager;
  },

  createReporter(SKUcode) {
    let item = this.items.items.filter(item => item.SKUcode === SKUcode)[0];
     
    return {
      itemInfo() {
        for (let prop in item) {
          console.log(`${prop}: ${item[prop]}`);
        }
      },
    }
  },

  reportInStock() {
    console.log(this.items.inStock());
  },
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10