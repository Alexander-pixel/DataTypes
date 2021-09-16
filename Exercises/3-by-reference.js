'use strict';

const number = {
  n: 5,
}

const inc = (n) => {
  if(typeof n === 'object')
    n.n++;
};

module.exports = { inc };
