'use strict';

module.exports = function hackerCase(text, startLower) {
  if (undefined === startLower) {
    startLower = false;
  }
  var upperCase = startLower;

  return text.replace(/\w/g, function(char) {
    return char[(upperCase = !upperCase) ? 'toLocaleUpperCase' : 'toLocaleLowerCase']();
  });
};
