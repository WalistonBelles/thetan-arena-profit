<template>
  <v-row class="text-center">
    <strong style="padding-right: 15px;"> URL: </strong> 
    <v-text-field
      v-model="input"
      label="Ex: https://marketplace.thetanarena.com/item/61924e5b52e9b79f013ac2f5"
      outlined
      dense
      append-icon="mdi-magnify"
      hide-details="auto"
      color="deep-purple darken-1"
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
      await this.$axios.$get('hero?id=' + this.input.split('item/')[1])
        .then(res => {
          nft.updateNft(res.data);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
})
</script>