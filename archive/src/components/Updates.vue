<template lang="html">
  <v-container fluid>
    <v-card>
      <v-toolbar dense dark color="accent" class="headline">
        <v-icon class="pr-2">{{pageIcon}}</v-icon>
        {{pageTitle}}
      </v-toolbar>
      <v-tabs
        v-model="activeTab"
        color="grey lighten-4"
        active-class="title"
        slider-color="primary"
        centered
        grow
      >
        <v-tab class="subheading">
          Major Dota Patches
        </v-tab>
        <!-- <v-tab class="subheading">
          DotaHub Updates
        </v-tab> -->
      </v-tabs>
      <v-tabs-items v-model="activeTab">
        <v-tab-item>
          <br>
          <dotaUpdates></dotaUpdates>
          <br>
        </v-tab-item>
        <!-- <v-tab-item>
          <br>
          <hubUpdates></hubUpdates>
          <br>
        </v-tab-item> -->
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import dotaUpdates from './updateComponents/dotaUpdates'
import hubUpdates from './updateComponents/hubUpdates'

export default {
  components: {
    dotaUpdates, hubUpdates
  },
  data(){
    return{
      activeTab: null,
      pageTitle: "Updates",
      pageIcon: "fas fa-sync"
    }
  }
}
</script>

<style lang="css">
</style>
