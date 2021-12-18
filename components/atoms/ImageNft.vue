<template>
  <img class="h-48" :src="`https://storage.googleapis.com/thetanarena-asset/${avatar}`">
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    avatar: {
      type: String,
      required: true
    }
  }
})
</script>