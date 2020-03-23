<template lang="html">
  <v-card>
    <v-toolbar dense color="primary" dark class="title">
      <v-img
        class="elevation-5"
        :src="getPic(aDetails.img)"
        contain :aspect-ratio="1/1" height="42" position="left"
        :lazy-src="require(`@/assets/img/hero-placeholder.jpg`)">
      </v-img>
      {{aDetails.dname}}
    </v-toolbar>
    <v-card-text class="body-2">
      <!-- DAMAGE -->
      <v-card v-if="aDetails.dmg" class="mb-1" color="grey lighten-2">
        <v-layout row wrap>
          <v-flex xs6>
            <v-icon color="red darken-3" small class="pl-2">fas fa-bolt</v-icon>
            DAMAGE:
          </v-flex>
          <v-flex xs6 class="text-xs-right pr-1">
            {{getValues(aDetails.dmg)}}
          </v-flex>
        </v-layout>
      </v-card>
      <!-- MANA -->
      <v-card v-if="aDetails.mc" class="mb-1" color="grey lighten-1">
        <v-layout row wrap>
          <v-flex xs6>
            <v-icon small color="blue" class="pl-1">fas fa-square</v-icon>
            MANA COST:
          </v-flex>
          <v-flex xs6 class="text-xs-right pr-1">
            {{getValues(aDetails.mc)}}
          </v-flex>
        </v-layout>
      </v-card>
      <!-- COOLDOWN -->
      <v-card v-if="aDetails.cd" class="mb-1" color="grey lighten-3">
        <v-layout row wrap>
          <v-flex xs6>
            <v-icon small color="black" class="pl-1">fas fa-clock</v-icon>
            COOLDOWN:
          </v-flex>
          <v-flex xs6 class="text-xs-right pr-1">
            {{getValues(aDetails.cd)}}
          </v-flex>
        </v-layout>
      </v-card>
      <!-- LOOP THROUGH ATTRIBUTES AND DISPLAY EACH -->
      <v-card v-for="(att, index) in aDetails.attrib" :color="getColor(index)" :key="index" class="mb-1">
        <v-layout row>
          <v-flex xs6>
            <v-icon small color="secondary" class="pl-1">fas fa-angle-double-right</v-icon>
            {{att.header}}
          </v-flex>
          <v-flex xs6 class="text-xs-right pr-1">
            {{getValues(att.value)}}
          </v-flex>
        </v-layout>
      </v-card>
    </v-card-text>
    <v-layout row class="primary white--text pa-2 text-xs-right">
      <v-flex xs12>
        <!-- DESCRIPTION ICONS -->
        <v-tooltip top class="pl-1" v-if="aDetails.bkbpierce == 'Yes'">
          <v-icon color="grey lighten-1" slot="activator">fab fa-gg-circle</v-icon>
          <span>Pierces BKB</span>
        </v-tooltip>
        <v-tooltip top class="pl-1" v-if="checkTargeting(aDetails.behavior, 'Unit Target')">
          <v-icon color="grey lighten-1" slot="activator">fas fa-user-circle</v-icon>
          <span>Targets a unit</span>
        </v-tooltip>
        <v-tooltip top class="pl-1" v-if="checkTargeting(aDetails.behavior, 'Point Target')">
          <v-icon color="grey lighten-1" slot="activator">fas fa-map-marker-alt</v-icon>
          <span>Targets a point</span>
        </v-tooltip>
        <v-tooltip top class="pl-1" v-if="checkTargeting(aDetails.behavior, 'No Target')">
          <v-icon color="grey lighten-1" slot="activator">fas fa-user-alt-slash</v-icon>
          <span>No Target</span>
        </v-tooltip>
        <v-tooltip top class="pl-1" v-if="checkTargeting(aDetails.behavior, 'Passive')">
          <v-icon color="grey lighten-1" slot="activator">fas fa-water</v-icon>
          <span>Passive</span>
        </v-tooltip>
        <v-tooltip top class="pl-1" v-if="checkTargeting(aDetails.behavior, 'Channeled')">
          <v-icon color="grey lighten-1" slot="activator">fas fa-spinner</v-icon>
          <span>Channeled Ability</span>
        </v-tooltip>
        <v-tooltip top class="pl-1" v-if="aDetails.dmg_type">
          <v-icon slot="activator" :color="dmgColor(aDetails.dmg_type)">
            fas fa-dot-circle
          </v-icon>
          <span>Damage Type: {{aDetails.dmg_type}}</span>
        </v-tooltip>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    aDetails : Object,
  },
  methods: {
    getColor(i){
      if (i % 2 ==0){
        return "grey lighten-1"
      }
      else {
        return "grey lighten-2"
      }
    },
    getPic(img){
      if (img){
        let image = img.split('/')
        image     = image[5]
        image     = image.replace('_md.png', '.jpg')
        return require(`@/assets/img/abilityIcons/${image}`)
      }
      else {
        return require(`@/assets/img/hero-placeholder.jpg`)
      }
    },
    checkTargeting(behavior, type) {
      if (behavior){
        if (behavior.includes(type)){
          return true
        }
      }
    },
    getValues(att){
      if (typeof(att) == "string"){
        return att
      }
      else {
        let escalatingValues = att.toString().replace(/,/g," / ")
        return escalatingValues
      }
    },
    dmgColor(dmgType){
      if (dmgType == 'Magical'){
        return "blue"
      }
      if (dmgType == 'Pure'){
        return "white"
      }
      if (dmgType == 'Physical'){
        return "red"
      }
    }
  }
}
</script>

<style lang="css">
</style>
