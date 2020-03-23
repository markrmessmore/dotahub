<template lang="html">
  <v-container fluid>
    <v-card>
      <v-toolbar dense dark color="accent" class="headline">
        <v-icon class="pr-2">{{pageIcon}}</v-icon>
        {{pageTitle}}
      </v-toolbar>
      <v-card-text>
        <p class="subheading">
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      pageTitle: "Hero Builds",
      pageIcon: "fas fa-cogs"
    }
  }
}
</script>

<style lang="css">
</style>
