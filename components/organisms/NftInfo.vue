<template>
  <v-row class="container nft-info" v-if="$nft.skinInfo">
    <ImageNft v-if="$nft.skinInfo" :avatar="$nft.skinInfo.imageFull"/>
    <div v-if="$nft.skinInfo" class="nft-info-name">
      <span class="text-2xl font-bold text-blue mt-2"> {{ $nft.skinInfo.name }} </span> <br><br>
      <span class="text-5xl font-bold mt-2"> {{ $nft.heroInfo.name }} </span> <br>
      <span class="text-md font-bold text-blue mt-2"> #{{ $nft.tokenId }} </span> <br><br>
      <span class="text-3xl font-bold text-yellow-400 mt-6"> 
        Price: ${{ (($nft.sale.price.value / 100000000) * getCoin.bnb).toFixed(2).toLocaleString() }}
      </span> <br>
    </div>
    <v-col cols="12">
      <HeroDetails/>
    </v-col>
    <v-col cols="12">
      <ProfitDetails/>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { nft } from '@/store';
import { $axios } from '@/utils/nuxt-instance';

export default Vue.extend({
  async created() {
    await this.getPriceBNB();
    await this.getPriceUSD();
  },

  computed: {
    $nft() {
      return nft.$show;
    },

    getCoin(this: any) {
      return nft.$coin;
    }
  },

  methods: {
    async getPriceBNB() {
      await this.$axios.$get('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd')
        .then(res => {
          nft.updateBNB(res['binancecoin'].usd);
        })
        .catch(err => {
          console.log(err);
        })
    },
    async getPriceUSD() {
      await this.$axios.$get('https://api.coingecko.com/api/v3/simple/price?ids=thetan-coin&vs_currencies=usd')
        .then(res => {
          nft.updateUSD(res['thetan-coin'].usd);
        })
        .catch(err => {
          console.log(err);
        })
    },
  }
})
</script>