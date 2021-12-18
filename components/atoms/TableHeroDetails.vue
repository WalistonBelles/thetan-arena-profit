<template>
  <table >
    <tbody>
      <tr>
        <th class="border-purple border-2 p-2 bg-gray-800">Hero Rarity</th>
        <td class="border-purple border-2 p-2 bg-gray-600 text-center" x-text="heroRarity">{{ getHeroRarity }}</td>
        <th class="border-purple border-2 p-2 bg-gray-800">Skin Rarity</th>
        <td class="border-purple border-2 p-2 bg-gray-600 text-center" x-text="skinRarity">{{ getSkinRarity }}</td>
      </tr>
      <tr>
        <th class="border-purple border-2 p-2 bg-gray-800">Total gTHC Battles</th>
        <td class="border-purple border-2 p-2 bg-gray-600 text-center" x-text="heroRarity">{{ $nft.heroRanking.totalBattleCapTHC }}</td>
        <th class="border-purple border-2 p-2 bg-gray-800">Max Battles per day</th>
        <td class="border-purple border-2 p-2 bg-gray-600 text-center" x-text="skinRarity"> {{ getBattleDaily }} </td>
      </tr>
      <tr>
        <th class="border-purple border-2 p-2 bg-gray-800">Used gTHC Battles</th>
        <td class="border-purple border-2 p-2 bg-gray-600 text-center" x-text="heroRarity"> {{ $nft.heroRanking.battleCapTHC }} </td>
        <th class="border-purple border-2 p-2 bg-gray-800">Days to finish Battles</th>
        <td class="border-purple border-2 p-2 bg-gray-600 text-center" x-text="skinRarity"> {{ Math.round(($nft.heroRanking.totalBattleCapTHC - $nft.heroRanking.battleCapTHC) / getBattleDaily)}} days</td>
      </tr>
      <tr>
        <th class="border-purple border-2 p-2 bg-gray-800">Remaining gTHC Battles</th>
        <td class="border-purple border-2 p-2 bg-gray-600 text-center" x-text="heroRarity"> {{ $nft.heroRanking.totalBattleCapTHC - $nft.heroRanking.battleCapTHC }} </td>
        <th class="border-purple border-2 p-2 bg-gray-800">Reward per Win</th>
        <td class="border-purple border-2 p-2 bg-gray-600 text-center" x-text="skinRarity"> {{ getRewardPerWin }} gTHC</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from 'vue';
import { nft } from '@/store';

export default Vue.extend({
  computed: {
    $nft() {
      return nft.$show;
    },
    getHeroRarity(this: any): string {
      return this.$nft.heroInfo.rarity === 2 
        ? 'Mythical' 
        : ( this.$nft.heroInfo.rarity === 1
          ? 'Epic'
          : 'Normal'
        );
    },
    getSkinRarity(this: any): string {
      return this.$nft.skinRarity === 2 
        ? 'Mythical' 
        : ( this.$nft.skinRarity === 1
          ? 'Rare'
          : 'Normal'
        );
    },
    getBattleDaily(this: any): string {
      return this.$nft.heroInfo.rarity === 2 
        ? '12' 
        : ( this.$nft.heroInfo.rarity === 1
          ? '10'
          : '8'
        );
    },
    getRewardPerWin(this: any): string {
      return this.$nft.heroInfo.rarity === 2 
        ? '29.55' 
        : ( this.$nft.heroInfo.rarity === 1
          ? '12.5'
          : '9.25'
        );
    },
  },
})
</script>