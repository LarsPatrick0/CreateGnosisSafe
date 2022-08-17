# CreateGnosisSafe


Create a set of new wallets for a to participate in the safe

const ethers = require('ethers')
 
const wallet = ethers.Wallet.createRandom()
console.log('address:', wallet.address)
console.log('mnemonic:', wallet.mnemonic.phrase)
console.log('privateKey:', wallet.privateKey)
 
 
  create .env file:
  
CLIENT_ADDRESS = ' '
CLIENT_MNEMOMIC = ' '
CLIENT_PRIVATEKEY =  

Impact
IMPACT_ADDRESS = ' 
IMPACT_MNEMOMIC =  
IMPACT_PRIVATEKEY =  

 
LEGAL_ADDRESS =  
LEGAL_MNEMOMIC =  
LEGAL_PRIVATEKEY = 0 


MANAGEMENT_ADDRESS =   
MANAGEMENT_MNEMOMIC = '  
MANAGEMENT_PRIVATEKEY = 

Goerli Gnosis contracts:
MULTI_SEND_ADDRESS = '0xA238CBeb142c10Ef7Ad8442C6D1f9E89e07e7761'
SAFE_PROXY_FACTORY_ADDRESS = '0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2'
SAFE_MASTER_COPY_ADDRESS = '0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552'
