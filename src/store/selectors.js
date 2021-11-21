import { get } from 'lodash'
import { createSelector } from 'reselect'

const account = state => get(state, 'web3.account')
export const accountSelector = createSelector(account, a => a)

const nftMarketLoaded = state => get(state, 'nftMarket.loaded', false)
export const nftMarketLoadedSelector = createSelector(nftMarketLoaded, nftm => nftm)

const nftMarket = state => get(state, 'nftMarket.contract')
export const nftMarketSelector = createSelector(nftMarket, nftc => nftc)

const allNFTsLoaded = state => get(state, 'nftMarket.allNFTs.loaded', false)
export const allNFTsLoadedSelector = createSelector(allNFTsLoaded, loaded => loaded)

const allNFTs = state => get(state, 'nftMarket.allNFTs.data')
export const allNFTsSelector = createSelector(allNFTs, nft => nft)