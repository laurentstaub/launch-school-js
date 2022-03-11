let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discountedPrice: function(percent) {
    let discount = this.price * percent / 100;
    return this.price - discount;
  },
};

console.log(item.discountedPrice(20));   // should return 40
console.log(item.discountedPrice(50));   // should return 25
console.log(item.discountedPrice(25));   // should return 37.5