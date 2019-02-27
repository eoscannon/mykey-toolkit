const {  JsonRpc } = require('eosjs') ;
const fetch = require('node-fetch');                            // node only; not needed in browsers
const Url = require('../config');
function getOpKeys(url ,code ,scope, table ,limit){
  const rpc = new JsonRpc(url || baseUrl , { fetch });
  rpc.get_table_rows({
    "json": true,
    "code": code,   // contract who owns the table
    "scope": scope,  // scope of the table
    "table": table,    // name of the table as specified by the contract abi
    "limit": limit || 100,
  }).then(result => {
    var arr = []
    for(let i = 1; i < result.rows.length ; i++){
      arr.push(result.rows[i])
    }
    return arr
  }).catch(err=>{
    console.log('\nCaught exception: ' )
  })
 
}
module.exports = getOpKeys