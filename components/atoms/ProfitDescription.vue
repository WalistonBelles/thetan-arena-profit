<template>
  <div class="italic text-xs text-gray-300">
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Total Revenue = total gTHC coins earned  using the remaining gTHC battles converted to USD</font>
      </font>
    </p>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Total Profit = total revenue - hero's price</font>
      </font>
    </p>
    <p>
      <img class="inline w-4" src="https://s2.coinmarketcap.com/static/img/coins/64x64/15250.png" alt="">
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> THC Price = $</font>
      </font>
      <span x-text="thcprice.toFixed(3)">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">{{ getCoin.usd.toFixed(3) }}</font>
        </font>
      </span>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> as of now </font>
      </font>
    </p>
    <p>
      <span class="text-red">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">RED</font>
        </font>
      </span>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> means loss and </font>
      </font>
      <span class="text-green">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">GREEN</font>
        </font>
      </span>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> means profit </font>
      </font>
    </p>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">1 gTHC per lose is included</font>
      </font>
    </p>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">4% claim fee is included</font>
      </font>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { nft } from '@/store';
export default Vue.extend({
  computed: {
    getCoin(this: any) {
      return nft.$coin;
    }
  },
})
</script>