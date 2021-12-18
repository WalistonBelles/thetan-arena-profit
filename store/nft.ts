import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'nft', stateFactory: true, namespaced: true })
export default class Nft extends VuexModule {
  private nft = {};
  private coin = {
    bnb: 0,
    usd: 0
  };

  get $show() {
    return this.nft;
  }

  get $coin() {
    return this.coin;
  }

  @Mutation
  private UPDATE_NFT(nft: any) {
    this.nft = nft;
  }

  @Mutation
  private UPDATE_BNB(bnb: number) {
    this.coin.bnb = bnb;
  }

  @Mutation
  private UPDATE_USD(usd: number) {
    this.coin.usd = usd;
  }

  @Action
  public async updateNft(nft: Object) {
    this.context.commit('UPDATE_NFT', nft);
  }

  @Action
  public async updateBNB(bnb: Number) {
    this.context.commit('UPDATE_BNB', bnb);
  }

  @Action
  public async updateUSD(usd: Number) {
    this.context.commit('UPDATE_USD', usd);
  }
}