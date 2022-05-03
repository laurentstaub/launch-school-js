function myBind(func, context) {
  return function () {
    return func.apply(context, arguments)
  }
}

let obj = {
  logThis() {
    console.log(this);
  },
};

let logThis = myBind(obj.logThis, {});
logThis();
