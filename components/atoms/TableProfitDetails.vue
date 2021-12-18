<template>
  <table >
    <tbody>
      <tr>
        <th class="border-purple border-2 p-2 bg-gray-800">Winrate %</th>
        <td 
          v-for="(item, index) in winrate" :key="index" 
          :class="`border-purple border-2 p-2 text-center ${getProfit(item) > 0 ? 'text-green' : 'text-red'}`"
        >
          {{ 100 * item }}%
        </td>
      </tr>
      <tr>
        <th class="border-purple border-2 p-2 bg-gray-800">Total Revenue ($)</th>
        <td 
          v-for="(item, index) in winrate" :key="index" 
          :class="`border-purple border-2 p-2 text-center ${getProfit(item) > 0 ? 'text-green' : 'text-red'}`"
        >
          {{ 
            (((Math.round(($nft.heroRanking.totalBattleCapTHC - $nft.heroRanking.battleCapTHC)) * getRewardPerWin) * item) * getCoin.usd).toFixed(2)
          }}
        </td>
        
      </tr>
      <tr>
        <th class="border-purple border-2 p-2 bg-gray-800">Total Profit ($)</th>
        <td 
          v-for="(item, index) in winrate" :key="index" 
          :class="`border-purple border-2 p-2 text-center ${getProfit(item) > 0 ? 'text-green' : 'text-red'}`"
        >
          {{ getProfit(item) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from 'vue';
import { nft } from '@/store';

export default Vue.extend({
  data() {
    return {
      winrate: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    }
  },

  computed: {
    $nft() {
      return nft.$show;
    },
    getCoin(this: any) {
      return nft.$coin;
    },
    getBattleDaily(this: any): string {
      return this.$nft.heroInfo.rarity === 2 
        ? '12' 
        : ( this.$nft.heroInfo.rarity === 1
          ? '10'
          : '8'
        );
    },
    getRewardPerWin(this: any): number {
      return this.$nft.heroInfo.rarity === 2 
        ? 29.55
        : ( this.$nft.heroInfo.rarity === 1
          ? 12.5
          : 9.25
        );
    },
  },

  methods: {
    getProfit(this: any, item: number): number | string{
      return parseFloat((((Math.round((this.$nft.heroRanking.totalBattleCapTHC - this.$nft.heroRanking.battleCapTHC)) * this.getRewardPerWin * item * this.getCoin.usd) * 0.96) - ((this.$nft.sale.price.value / 100000000) * this.getCoin.bnb)).toFixed(2));
    }
  }
})
</script>