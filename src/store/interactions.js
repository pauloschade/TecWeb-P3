import Web3 from 'web3'
import {
  web3Loaded,
  web3AccountLoaded,
  nftMarketLoaded,
} from './actions'
import NFTMarket from '../abis/NFTMarket.json'

export const loadWeb3 = async (dispatch) => {
  if(typeof window.ethereum!=='undefined'){
    const web3 = new Web3(window.ethereum)
    dispatch(web3Loaded(web3))
    return web3
  } else {
    window.alert('Please install MetaMask')
    window.location.assign("https://metamask.io/")
  }
}

export const loadAccount = async (web3, dispatch) => {
  const accounts = await web3.eth.getAccounts()
  const account = await accounts[0]
  if(typeof account !== 'undefined'){
    dispatch(web3AccountLoaded(account))
    return account
  } else {
    window.alert('Please login with MetaMask')
    return null
  }
}

export const loadNFTMarket = async (web3, networkId, dispatch) => {
    try {
      const nftMarket = new web3.eth.Contract(NFTMarket.abi, NFTMarket.networks[networkId].address)
      dispatch(nftMarketLoaded(nftMarket))
      return nftMarket
    } catch (error) {
      console.log('Contract not deployed to the current network. Please select another network with Metamask.')
      return null
    }
  }