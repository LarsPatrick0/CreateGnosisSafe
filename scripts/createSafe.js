require('dotenv').config()
  const safeCore = require ('@gnosis.pm/safe-core-sdk')
const ethersAdapter = require('@gnosis.pm/safe-ethers-lib')["default"];
require('ethers')
 
const ethers = require('ethers');
 

 
 //set the provider the network to be used 
provider = new ethers.providers.AlchemyProvider(5, process.env.API_URL);
 
//---------------
//log check only
async function networkLog() {
 
    const network = await  provider.getNetwork();
  
  }
//end check
//---------------

  networkLog()

 
  //Create the wallets for the different parties
 impactWalletSigner = (new  ethers.Wallet(process.env.IMPACT_PRIVATEKEY,provider)).connect(provider)
 clientWalletSigner = (new  ethers.Wallet(process.env.CLIENT_PRIVATEKEY,provider)).connect(provider)
 legalWalletSigner = (new  ethers.Wallet(process.env.LEGAL_PRIVATEKEY,provider)).connect(provider)

 
   const walletImpactAddress = ""; 
   const walletLegalAddress = ""; 
   const walletClientAddress = ""; 
//---------------
//log check only
 
//end check
//---------------

 
 
 const ethAdapter_client = new ethersAdapter({ ethers, signer: clientWalletSigner });
 const ethAdapter_impact = new ethersAdapter({ ethers, signer: impactWalletSigner });
 const ethAdapter_legal = new ethersAdapter({ ethers, signer: legalWalletSigner });

  
 //First address is used as owner for the new save


const  owners = [impactWalletSigner.address, legalWalletSigner.address, clientWalletSigner.address]
const threshold = 2
const safeAccountConfig = { owners: owners, threshold: threshold};
 
 

async function getSafe() {
    const chainId = await ethAdapter_impact.getChainId()
    const contractNetworks = {
        [chainId]: {
          multiSendAddress: process.env.MULTI_SEND_ADDRESS,
          safeMasterCopyAddress: process.env.SAFE_MASTER_COPY_ADDRESS,
          safeProxyFactoryAddress: process.env.SAFE_PROXY_FACTORY_ADDRESS
        }
      }

     const safeFactory = await  safeCore.SafeFactory.create({  ethAdapter: ethAdapter_impact })
     console.log('factory created')
      safeSdk = await safeFactory.deploySafe( { safeAccountConfig: safeAccountConfig})
    console.log('SafeSDK ' + safeSdk.address);  
    //0xd3a38bC6A1a1a4B3De8aDb5436ed5980Cf4f661f contract created
  }
  console.log('Save create')
  getSafe()

 
