<template lang="html">
  <v-container fluid>
    <v-card>
      <v-toolbar dense dark color="accent" class="headline">
        <v-icon class="pr-2">{{pageIcon}}</v-icon>
        {{pageTitle}}
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-text-field label="Hero Search" v-model="search" append-icon="fas fa-search"></v-text-field>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs4 sm2 xl1 v-for="(hero, index) in filterHeroes" :key="index">
            <v-card hover class="ma-1" height="100px" @click.native="showHero(hero)">
              <v-img :src="require(`@/assets/img/heroes/portraits/${hero.name}.jpg`)" contain :aspect-ratio="12/7" :lazy-src="require(`@/assets/img/hero-placeholder.jpg`)"></v-img>
              <div class="body-1 text-xs-center">{{hero.localized_name}}</div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      pageTitle : "Heroes",
      pageIcon  : "fas fa-users",
      search    : ""
    }
  },
  methods: {
    showHero(selected) {
      this.$router.push({name: 'hero', params: {heroName: selected.name, incomingHero: selected}})
    },
  },
  computed: {
    filterHeroes(){
      let filteredList = this.getHeroes
      if (this.search) {
        filteredList = this.getHeroes.filter(
          hero => hero.localized_name.toLowerCase().includes(this.search.toLowerCase())
        )
      }
      return filteredList
    },
    getHeroes(){
      return this.$store.getters.getHeroes
    },
  },
}
</script>

<style lang="css">
</style>
