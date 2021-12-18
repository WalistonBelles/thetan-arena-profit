import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance';

@Module({ name: 'nft', stateFactory: true, namespaced: true })
export default class Nft extends VuexModule {
  private nft = {};

  get $show() {
    return this.nft
  }

  @Mutation
  private UPDATE_NFT(nft: any) {
    this.nft = nft;
  }

  @Action
  public async updateNft(nft: Object) {
    this.context.commit('UPDATE_NFT', nft);
  }
}