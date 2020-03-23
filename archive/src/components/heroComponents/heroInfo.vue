<template lang="html">
  <v-card>
    <v-toolbar dark color="secondary" class="headline">
      <v-btn outline :to="{name: 'heroes'}">
          <v-icon left>fas fa-long-arrow-alt-left</v-icon>
          Back
      </v-btn>
      <v-spacer></v-spacer>
      {{hero.localized_name}}
    </v-toolbar>
    <basicInfo :hero="hero"></basicInfo>
    <v-card-text>
      <v-tabs
        v-model="selectedTab"
        color="accent2"
        dark
        grow
        slider-color="primary"
      >
        <v-tab>
          Background
        </v-tab>
        <v-tab>
          Detailed Information
        </v-tab>
        <v-tab>
          Abilities
        </v-tab>
        <!-- <v-tab>
          Items & Matchups
        </v-tab> -->
        <v-tabs-items>
          <v-tab-item>
            <v-container class="subheading">
              <p v-for="p in getHeroLore">{{p}}</p>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-container class="subheading">
              <detailedInfo :hero="hero"></detailedInfo>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <heroAbilities :heroAbilities="getHeroAbilities"></heroAbilities>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>

    </v-card-text>
    <!-- BOTTOM TOOL BAR -->
    <v-toolbar dark color="secondary" class="headline">
      <v-btn outline :to="{name: 'heroes'}">
          <v-icon left>fas fa-long-arrow-alt-left</v-icon>
          Back
      </v-btn>
      <v-spacer></v-spacer>
      {{hero.localized_name}}
    </v-toolbar>
  </v-card>
</template>

<script>
import basicInfo from './heroBasicInfo.vue'
import detailedInfo from './heroDetailedInfo.vue'
import heroAbilities from './heroAbilities.vue'
export default {
  components: {
    basicInfo,detailedInfo, heroAbilities
  },
  created(){
    if (!this.incomingHero) {
      let url = window.window.location.href.split("/")
      let selectedHero = url[url.length -1]
      this.getHeroInfo(selectedHero)
    }
  },
  props: {
    incomingHero: Object,
  },
  data(){
    return {
      hero : this.incomingHero,
      selectedTab: "",
    }
  },
  methods: {
    getHeroInfo(selectedHero){
      let allHeroes = this.$store.getters.getHeroes
      allHeroes.filter(hero => {
        if (hero.name == selectedHero) {
          this.hero = hero
        }
      })
    },
  },
  computed: {
    getHeroLore(){
      let lore = this.$store.getters.getHeroLore
      return lore[this.hero.name].split("\n")
    },
    getHeroAbilities(){
      let abilities = []
      Object.entries(this.$store.getters.getHeroAbilities).filter(ability => {
        if (this.hero.name == 'sand_king'){
          if (ability[0].startsWith('sandking')){
            abilities.push(ability)
          }
        }
        else if (ability[0].startsWith(this.hero.name)){
          abilities.push(ability)
        }
      })
      return abilities
    }
  }
}
</script>

<style scoped>
table {
  vertical-align: middle;
  text-align: center;
}
tr:hover {
  background-color: #f5f5f5;
}
td {
  background-color: #5b5b5b;
}
</style>
