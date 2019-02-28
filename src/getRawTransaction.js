const {  JsonRpc } = require('eosjs') ;
const fetch = require('node-fetch'); 
const Url = require('../config');
function getRawTransaction(id , block_num ,url ){
  const rpc = new JsonRpc(url || baseUrl , { fetch })
  rpc.history_get_transaction(id ,block_num)
  .then(result => {
    return result
  }).catch(err=>{
    console.log('err =',err)
  });
}

module.exports = getRawTransaction