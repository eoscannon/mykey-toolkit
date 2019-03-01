const getAdminKey = require('./src/getAdminKey');
const getOpKeys = require('./src/getOpKeys');
const getRawTransaction = require('./src/getRawTransaction');

let mykey = {
  getAdminKey: (code ,scope , table, url ) => {
    return getAdminKey(code ,scope , table, url )
  },
  getOpKeys: (code ,scope , table, url ) => {
    return getOpKeys(code ,scope , table, url )
  },

  getRawTransaction: ( id , block_num ,url) => {
    return getRawTransaction( id , block_num ,url)
  }
};

module.exports = mykey