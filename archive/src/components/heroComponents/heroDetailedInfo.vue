<template lang="html">
  <div>
    <v-layout row wrap>
      <v-flex xs12 lg10 offset-lg1 xl8 offset-xl2>
        <v-card>
          <v-toolbar dense color="accent" dark class="subheading">
            <v-flex xs12 sm7>
              HERO ATTRIBUTES
            </v-flex>
            <v-flex xs12 sm5>
              <v-text-field
                name="searchAtt"
                color="black"
                v-model="searchString"
                label="Attribute search:"
                append-icon="fas fa-search"
                clearable
              ></v-text-field>
            </v-flex>
          </v-toolbar>
          <table class="subheading" width="100%">
            <tr v-for="(stat, index) in attributeSearch()" :key="index">
              <td class="attrTitle">{{stat.title}}</td>
              <td class="attr">{{stat.value}}</td>
            </tr>
          </table>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import heroCalcs from '../../assets/js/calculations.js'
export default {
  mixins: [heroCalcs],
  props: {
    hero: Object
  },
  data(){
    return {
      heroStats : [
        {
          title   : "Base Move Speed",
          value   : this.hero.move_speed
        },
        {
          title   : "Base Turn Rate",
          value   : this.hero.turn_rate
        },
        {
          title   : "Base Health",
          value   : this.hero.base_health
        },
        {
          title   : "Base Health Regen (per second)",
          value   : "+" + this.getHPRegen(this.hero.str_gain, this.hero.base_str, 1)
        },
        {
          title   : "Base Mana",
          value   : this.hero.base_mana
        },
        {
          title   : "Base Mana Regen (per second)",
          value   : "+" + this.getManaRegen(this.hero.int_gain, this.hero.base_int, 1)
        },
        {
          title   : "Base Armor",
          value   : this.hero.base_armor
        },
        {
          title   : "Base Magic Resist",
          value   : this.hero.base_mr + "%"
        },
        {
          title   : "Base Strength",
          value   : this.hero.base_str
        },
        {
          title   : "Base Strength Gain (per level)",
          value   : "+" + this.hero.str_gain
        },
        {
          title   : "Base Agility",
          value   : this.hero.base_agi
        },
        {
          title   : "Base Agility Gain (per level)",
          value   : "+" + this.hero.agi_gain
        },
        {
          title   : "Base Intelligence",
          value   : this.hero.base_int
        },
        {
          title   : "Base Intelligence Gain (per level)",
          value   : "+" + this.hero.int_gain
        },
        {
          title   : "Spell Amplification",
          value   : "+" + this.getSpellAmp(this.hero.primary_attr, this.hero.int_gain, this.hero.base_int, 1) +"%"
        },
        {
          title   : "Minimum Base Attack Damage",
          value   : this.hero.base_attack_min
        },
        {
          title   : "Maximum  Base Attack Damage",
          value   : this.hero.base_attack_max
        },
        {
          title   : "Base Attack Range",
          value   : this.hero.attack_range === 150 ? "Melee" : this.hero.attack_range
        },
        {
          title   : "Base Attack Time (seconds per attack)",
          value   : this.hero.attack_rate
        },
        {
          title   : "Projectile Speed",
          value   : this.hero.attack_range === 150 ? "n/a" : this.hero.projectile_speed
        },
      ],
      searchString: ""
    }
  },
  methods: {
    attributeSearch(){
      if (!this.searchString){
        return this.heroStats
      }
      else {
        let statList = this.heroStats
        if (this.searchString) {
          statList = this.heroStats.filter(
            stat => stat.title.toLowerCase().includes(this.searchString.toLowerCase())
          )
        }
        return statList
      }
    }
  }
}
</script>

<style lang="css">
table {
    border-collapse: collapse;
}
table, th, td {
    border: 1px solid black;
    padding: 5px;
}
tr:nth-child(even) {
  background-color: #BDBDBD;
}
.attTitle {
  width: 70%;
}
.attr{
  width: 30%;
  text-align: center;
}
</style>
