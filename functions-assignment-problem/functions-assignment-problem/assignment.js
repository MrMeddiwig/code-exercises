const sayHello = name => console.log('Hello ' + name);

const sayHello2 = (name, newPhrase) => console.log(newPhrase + ' '+ name); 
const sayHello3 = () => console.log('Hard hello!'); 
const sayHello4 = name => 'Hi ' + name; 

sayHello('Max');
sayHello2('Max', 'Hello');
sayHello3();
console.log(sayHello4('Max'));

const sayHello5 = (name, newPhrase = 'Hi ') => console.log(newPhrase + ' ' + name); 

sayHello5('Logan');
sayHello5('Logan', 'Hello');

function checkInput(hollaBack, ...strings) {
  let emptyStrings = false;
  for (const text of strings) {
    if (!text) {
      emptyStrings = true;
      break;
    }
    if (!emptyStrings) {
      hollaBack();
    }
  }
};

checkInput(
  () => {
    console.log('Someone got something to say');
  },
  'Hello',
  '12',
  'adssadffa',
  'Not empty',
  'Jellybeans'
);