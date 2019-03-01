const {  JsonRpc } = require('eosjs') ;
const fetch = require('node-fetch'); 
const Url = require('../config');
async function getRawTransaction(id , block_num ,url ){
  const rpc = new JsonRpc(url || baseUrl , { fetch })
  try{
      const result =await rpc.history_get_transaction(id ,block_num)
      return result
  }catch(err){
    console.log('err :',err)
  }
}

module.exports = getRawTransaction