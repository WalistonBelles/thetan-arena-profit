<template>
  <v-row class="text-center" style="align-items: center;">
    <strong style="padding-right: 15px;"> URL: </strong> 
    <v-text-field
      v-model="input"
      outlined
      dense
      append-icon="mdi-magnify"
      hide-details="auto"
      background-color="white"
      color="blue"
      @click:append="searchNft"
    />
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { nft } from '@/store'
import { $axios } from '@/utils/nuxt-instance'

export default Vue.extend({
  data() {
    return {
      input: "",
    }
  },

  computed: {
    $nft() {
      return nft.$show;
    }
  },

  methods: {
    async searchNft() {
      if (!this.input || this.input.split('item/').length < 2) {
        return;
      }
      await this.$axios.$get('https://data.thetanarena.com/thetan/v1/hero?id=' + this.input.split('item/')[1])
        .then(res => {
          nft.updateNft(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
})
</script>