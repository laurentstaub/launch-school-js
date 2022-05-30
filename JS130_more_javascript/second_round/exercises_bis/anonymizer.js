let Account = (function() {
  let userMail;
  let userPassword;
  let userFirstName;
  let userLastName;
  let userDisplayName;

  function anonymize() {
    let choices = "abcdefghijklmnopqrstuvwxyz0123456789";
    let randomNumber = [];

    for (let index = 1; index <= 16; index += 1) {
      randomNumber.push(choices[Math.floor(Math.random() * 36)]);
    }

    return randomNumber.join("");
  }

  return {  
    init(email, password, firstName, lastName) {
      userMail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },
  
    reanonymize(pass) {
      if (pass === userPassword) {
        this.displayName = anonymize();
        return true;
      } else {
        return "Invalid password";
      }
    },
  
    resetPassword(pass, newPassword) {
      if (pass === userPassword) {
        userPassword = newPassword;
        return true;
      } else {
        return "Invalid password";
      }
    },
  
    firstName(pass) {
      if (pass === userPassword) {
        return userFirstName;
      } else {
        return "Invalid password";
      }
    },
  
    lastName(pass) {
      if (pass === userPassword) {
        return userLastName;
      } else {
        return "Invalid password";
      }
    },
  
    email(pass) {
      if (pass === userPassword) {
        return userMail;
      } else {
        return "Invalid password";
      }
    },
  
    displayName() {
      console.log(this.displayName);
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
console.log(fooBar.reanonymize('abc'));                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'