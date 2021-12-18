import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Nft from '@/store/nft'

// eslint-disable-next-line import/no-mutable-exports
let nft: Nft

const initializeStores = (store: Store<any>): void => {
  nft = getModule(Nft, store)
}

export {
  initializeStores,
  nft,
}