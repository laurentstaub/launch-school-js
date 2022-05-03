let ItemCreator = (function() {
  let MIN_LENGTH = 5;

  function createSkuCode(itemName, category) {
    return itemName.replace(' ', '').slice(0, 3) + category.slice(0, 2);
  }

  function isValidItemName(itemName) {
    return itemName.replace(' ', '').length > MIN_LENGTH;
  }

  function isValidCategory(category) {
    const hasWhiteSpace = (text) => (text.match(" ") || []).length > 0;
    return category.length > MIN_LENGTH && !hasWhiteSpace(category);
  }

  return function(itemName, category, quantity) {
    if (isValidItemName(itemName) 
        && isValidCategory(category)
        && (quantity !== undefined)) {
      this.skuCode = createSkuCode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  }
})();

let ItemManager = {
  items: [],

  create(itemName, category, quantity) {
    let newItem = new ItemCreator(itemName, category, quantity);
    if (newItem.notValid) {
      return false;
    } else this.items.push(newItem);
    console.log(this.items)
  },

  update(skuCode) {},
  delete() {},
  inStock() {},
  itemsInCategory() {},
};

// TESTS
ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
/*
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

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
*/