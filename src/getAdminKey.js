const {  JsonRpc } = require('eosjs') ;
const fetch = require('node-fetch');                            // node only; not needed in browsers

const Url = require('../config');
async function getAdminKey(code ,scope , table ,url  ){

  const rpc = new JsonRpc(url || baseUrl , { fetch });
  try{
    const result = await rpc.get_table_rows({
      "json": true,
      "code": code,   // contract who owns the table
      "scope": scope,  // scope of the table
      "table": table,    // name of the table as specified by the contract abi
      "limit": 1,
    })
    let data = result.rows[0].key
    return data 
  }catch(err){
    console.log('err ',err)
  }
  
}
module.exports = getAdminKey