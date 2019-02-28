const {  JsonRpc } = require('eosjs') ;
const fetch = require('node-fetch');                            // node only; not needed in browsers

const Url = require('../config');
function getAdminKey(code ,scope , table ,url  ){

  const rpc = new JsonRpc(url || baseUrl , { fetch });
    rpc.get_table_rows({
      "json": true,
      "code": code,   // contract who owns the table
      "scope": scope,  // scope of the table
      "table": table,    // name of the table as specified by the contract abi
      "limit": 1,
    }).then(result => {
      let data = result.rows[0].key
      return data
    }).catch(err=>{
      console.log('\nCaught exception: ' )
    })
}
module.exports = getAdminKey