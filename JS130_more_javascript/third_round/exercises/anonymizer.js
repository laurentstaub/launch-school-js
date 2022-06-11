let Account = (function() {
  let userMail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function anonymize() {
    let result = "";
    const getRandomChar = () => {
      let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
      return chars [Math.floor(Math.random() * (chars.length - 1))];
    }
    
    for (let index = 1; index <= 16; index += 1) {
      let randomChar = getRandomChar();
      result += randomChar;
    }

    return result;
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
        return 'Invalid Password';
      }
    },

    resetPassword(pass, newPassword) {
      if (pass === userPassword) {
        userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(pass) {
      if (pass === userPassword) {
        return userFirstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName() {
      if (pass === userPassword) {
        return userLastName;
      } else {
        return 'Invalid Password';
      }
    },

    email() {
      if (pass === userPassword) {
        return userMail;
      } else {
        return 'Invalid Password';
      }
    },
  }
})()


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