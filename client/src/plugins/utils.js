

let account = null
let favcontract = 'TP942jTRzCq1swCvbfPgHAwzQUoX4z4xK2'
let favoritecontract = null


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
 


export async function setFavContract() {
  // TODO: abtain contract Object
  favoritecontract = await window.tronWeb.contract().at(favcontract);

}

export async function fetchFav() {

  const favnum  = await favoritecontract.favoritenumber().call();
  return favnum;

}
