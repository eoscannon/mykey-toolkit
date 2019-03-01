API 

1/ mykey.getAdminKey(code ,scope , table, url )
返回案例：
{
  pubkey: "EOS6iVQRT5rFNvsnc6pN5gjZT44eQxcJm2JZHqXzQpeq28p6Gm4VU",
  status: 0,
  nonce: 32
}

2/ mykey.getOpKeys(code ,scope , table, url )
返回案例：
[ 
  { index: 1,
    key: 
     { pubkey: 'EOS6iVQRT5rFNvsnc6pN5gjZT44eQxcJm2JZHqXzQpeq28p6Gm4VU',
       status: 0,
       nonce: 67 } },
  { index: 2,
    key: 
     { pubkey: 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV',
       status: 0,
       nonce: 4 } },
  { index: 3,
    key: 
     { pubkey: 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV',
       status: 0,
       nonce: 0 } },
  { index: 4,
    key: 
     { pubkey: 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV',
       status: 0,
       nonce: 0 } },
  { index: 5,
    key: 
     { pubkey: 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV',
       status: 0,
       nonce: 2 } },
  { index: 6,
    key: 
     { pubkey: 'EOS6iVQRT5rFNvsnc6pN5gjZT44eQxcJm2JZHqXzQpeq28p6Gm4VU',
       status: 0,
       nonce: 0 } 
  } 
]
3/ mykey.getRawTransaction( id , block_num ,url)
返回案例：
{ id: '8b5231aab752e856870c9c9185086d185cc6ed64a9ad38dcd64dda39715ccdec',
  trx: 
   { receipt: 
      { status: 'executed',
        cpu_usage_us: 1796,
        net_usage_words: 47,
        trx: [Array] },
     trx: 
      { expiration: '2019-02-27T06:46:19',
        ref_block_num: 28109,
        ref_block_prefix: 2764242594,
        max_net_usage_words: 0,
        max_cpu_usage_ms: 0,
        delay_sec: 0,
        context_free_actions: [],
        actions: [Array],
        transaction_extensions: [],
        signatures: [Array],
        context_free_data: [] } },
  block_time: '2019-02-27T06:45:51.000',
  block_num: 36335384,
  last_irreversible_block: 36610474,
  traces: [] }

  