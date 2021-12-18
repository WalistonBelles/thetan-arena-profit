<template>
  <img src="@/static/logo.png" :width="width_logo">
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    width_logo: {
      type: String,
      default: "200px"
    }
  }
})
</script>