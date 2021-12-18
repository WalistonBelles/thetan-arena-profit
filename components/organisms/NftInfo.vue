<template>
  <div class="container nft-info">
    <div>
      <ImageNft v-if="$nft.skinInfo" :avatar="$nft.skinInfo.imageFull"/>
    </div>
    <div v-if="$nft.skinInfo" class="nft-info-name">
      <span class="text-2xl font-bold text-blue-300 mt-2"> {{ $nft.skinInfo.name }} </span> <br>
      <span class="text-5xl font-bold mt-2"> {{ $nft.heroInfo.name }} </span> <br>
      <span class="text-3xl font-bold text-yellow-400 mt-6"> Price: {{ $nft.sale.price.value }} {{ $nft.sale.price.name }} </span> <br>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { nft } from '@/store';

export default Vue.extend({
  computed: {
    $nft() {
      return nft.$show;
    }
  }
})
</script>

<style lang="scss">
.nft-info {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
}
</style>