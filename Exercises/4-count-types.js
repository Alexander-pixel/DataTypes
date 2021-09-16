'use strict';

const countTypesInArray = arr => {
  const counter = {};
  for (const c of arr) {
    const type = typeof c;
    const count = counter[type] ? counter[type] : 0;
    counter[type] = count + 1;
  }
  return counter;
};

module.exports = { countTypesInArray };
