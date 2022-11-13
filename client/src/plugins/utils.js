

let account = null
let favcontract = 'TP942jTRzCq1swCvbfPgHAwzQUoX4z4xK2'
let managercontract = 'TWrgzkDNXZbGyqKGieyiu29QQTXgYnzRfG'

let mancont = null


export const accountAddress = () => {
  return account
}

export function getTronWeb(){
  // Obtain the tronweb object injected by tronLink 
  var obj = setInterval(async ()=>{
    if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
        clearInterval(obj)
        console.log("tronWeb successfully detected!")
        var tronweb = window.tronWeb
        console.log(tronweb)
        var signedTx = await tronweb.trx.sign()
        var broastTx = await tronweb.trx.sendRawTransaction(signedTx)
        console.log(broastTx)       
    }
  }, 10)
}
 

export async function setManagerContract() {
  // TODO: abtain contract Object
  mancont = await window.tronWeb.contract().at(managercontract);

}

export async function createEvents(name, location, manager, ticketcap, description) {
  // TODO: abtain contract Object
  const result = await mancont.create_event(name, location, manager, ticketcap, description).send({
    feeLimit:100_000_000,
    callValue:0,
    shouldPollResponse:true
  });
  console.log(result)
  return result;
}


export async function fetchFav() {

  const favnum  = await mancont.favoritenumber().call();
  return favnum;

}
