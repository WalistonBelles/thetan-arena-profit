<template>
  <v-card class="mx-auto overflow-hidden">
    <v-app-bar>
      <v-toolbar-title class="menu-logo">
        <Logo width_logo="200px"/>
      </v-toolbar-title>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
  }
</script>

<style lang="scss" scoped>
.menu-logo {
  width: 100%;
  display: grid;
  justify-content: center;
}
</style>