let Account = (function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;
  
  const anonymize = () => {
    let CHARS = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    while (result.length < 16) {
      result += CHARS[Math.floor(Math.random() * CHARS.length)];
    }

    return result;
  }

  return {
    init(email, password, firstName, lastName, displayName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    reanonymize(givenPass) {
      if (givenPass === userPassword) {
        this.displayName = anonymize();
        return true;
      } else return "Invalid Password";
    },

    resetPassword(givenPass, newPass) {
      if (givenPass === userPassword) {
        userPassword = newPass;
        return true;
      } else return "Invalid Password";
    },

    firstName(givenPass) {
      return givenPass === userPassword ? userFirstName : "Invalid Password";
    },

    lastName(givenPass) {
      return givenPass === userPassword ? userLastName : "Invalid Password";
    },

    email(givenPass) {
      return givenPass === userPassword ? userEmail : "Invalid Password";
    },
  };
})();


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'