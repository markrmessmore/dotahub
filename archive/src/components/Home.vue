<template lang="html">
  <v-container fluid>
    <v-card>
      <v-toolbar dense dark color="accent" class="headline">
        <v-icon class="pr-2">{{pageIcon}}</v-icon>
        {{pageTitle}}
      </v-toolbar>
      <v-container>
        <v-layout row wrap>
          <v-flex xs4 v-for="(item, index) in navItems" :key="index">
            <v-card
              height="175px"
              class="text-xs-center ma-1"
              :color="item.color"
              :to="item.link"
              dark
              ripple
              tag="span"
              style="cursor: pointer"
            >
            <v-card-text>
              <br>
                <div class="title">
                  {{item.item}}
                  <br>
                  <br>
                  <v-icon large>{{item.icon}}</v-icon>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      pageTitle: "Home",
      pageIcon: "fas fa-home",
    }
  },
  computed: {
    navItems(){
      return this.$store.getters.getNavItems
    }
  },
  methods: {
    cardLink(page){
      this.$router.push({path: page})
    }
  }
}
</script>

<style lang="css">
</style>
