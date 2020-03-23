<template lang="html">
  <v-card>
    <v-layout wrap row fill-height class="primary white--text subheading">
      <v-flex xs12 sm4>
        <v-img :src="require(`@/assets/img/heroes/portraits/${hero.name}.jpg`)"
          height="100%"
          contain
          :aspect-ratio="12/7"
          :lazy-src="require(`@/assets/img/hero-placeholder.jpg`)"
        >
        </v-img>
      </v-flex>
      <v-flex xs12 sm8>
        <v-container fluid>
          <v-layout justify-space-around row wrap>
            <v-flex xs12 class="text-xs-center title">
              Level 1 Hero Stats:
            </v-flex>
            <!-- HEALTH AND MANNA BARS -->
            <v-flex xs10 offset-xs-1 class="white--text">
              <div class="spacerBar"></div>
              <!-- HEALTH -->
              <div class="text-xs-right green attBar pa-1">
                <v-layout row wrap>
                  <v-flex xs7>
                    {{getHeroHP(hero.primary_attr, hero.str_gain, hero.base_str, 1)}}
                    / {{getHeroHP(hero.primary_attr, hero.str_gain, hero.base_str, 1)}}
                  </v-flex>
                  <v-flex xs2 offset-xs3 class="pr-1">
                    +{{getHPRegen(hero.str_gain, hero.base_str, 1)}}
                  </v-flex>
                </v-layout>
              </div>
              <div class="spacerBar"></div>
              <!-- MANA -->
              <div class="text-xs-right blue attBar pa-1">
                <v-layout row wrap>
                  <v-flex xs7>
                    {{getHeroMP(hero.int_gain, hero.base_int, 1)}}
                    / {{getHeroMP(hero.int_gain, hero.base_int, 1)}}
                  </v-flex>
                  <v-flex xs2 offset-xs3 class="pr-1">
                    +{{getManaRegen(hero.int_gain, hero.base_int, 1)}}
                  </v-flex>
                </v-layout>
              </div>
              <div class="spacerBar"></div>
            </v-flex>
            <v-flex xs4 class="ma-1" v-for="(stat, index) in heroStats" d-flex :key="index">
              <v-tooltip right>
                <v-layout slot="activator" row :class="colorByAtt(stat.color)">
                  <v-flex xs3>
                    <v-icon :color="stat.color" small class="pl-2">{{stat.icon}}</v-icon>
                  </v-flex>
                  <v-flex xs8 class="text-xs-right subheading pt-1 pl-1">
                    {{stat.attr}}
                  </v-flex>
                </v-layout>
                <span>{{stat.label}}</span>
              </v-tooltip>
            </v-flex>
            <div class="body-1 text-xs-center">
              <br>
              <i>*Outlined field signifies primary attribute:<br>strength, agility or intelligence.</i>
            </div>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-card>
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
      heroStats: [
        {
          icon      : "fa-shield-alt",
          color     : "accent",
          label     : "Starting armor",
          attr      : this.getHeroArmor(this.hero.primary_attr, this.hero.agi_gain, this.hero.base_agi, 1, this.hero.base_armor)
        },
        {
          icon      : "fas fa-fist-raised",
          color     : "red",
          label     : "Base str + str gain",
          attr      : `${this.hero.base_str} + ${this.hero.str_gain}`
        },
        {
          icon      : "fas fa-bolt",
          color     : "white",
          label     : "Base attack damage",
          attr      : `${this.getAttDmg(this.hero, 1, this.hero.base_attack_min)} - ${this.getAttDmg(this.hero, 1, this.hero.base_attack_max)}`
        },
        {
          icon      : "fab fa-google-wallet",
          color     : "green",
          label     : "Base agi + agi gain",
          attr      : `${this.hero.base_agi} + ${this.hero.agi_gain}`
        },
        {
          icon      : "directions_run",
          color     : "yellow",
          label     : "Base move speed",
          attr      : this.getMoveSpeed(this.hero.primary_attr, this.hero.agi_gain, this.hero.base_agi, 1, this.hero.move_speed)
        },
        {
          icon      : "fas fa-magic",
          color     : "blue",
          label     : "Base int + int gain",
          attr      : `${this.hero.base_int} + ${this.hero.int_gain}`
        },
      ]
    }
  },
  methods: {
    colorByAtt(color){
      let att = this.hero.primary_attr
      let colorStat;
      if (color == 'blue' && att == 'int'){
        colorStat = 'intBorder'
      }
      if (color == 'green' && att == 'agi'){
        colorStat = 'agiBorder'
      }
      if (color == 'red' && att == 'str'){
        colorStat = 'strBorder'
      }
      return `text-xs-left attBar ${colorStat}`
    }
  },
  computed: {

  }
}
</script>

<style lang="css">
.agiBorder{
  border: 1px solid #66BB6A;
}
.intBorder{
  border: 1px solid #64B5F6;
}
.strBorder{
  border: 1px solid red;
}
.attBar{
  border-radius: 5px;
  background-color: #424242;
  height: 30px;
}
.spacerBar{
  height: 5px;
}
</style>
