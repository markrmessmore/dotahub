<template lang="html">
  <v-card>
    <v-card v-for="(ability, index) in standardAbilities"
      :key="index"
      hover class="ma-2" color="primary" dark>
      <!-- SKILL IMAGE -->
      <v-layout row wrap>
        <v-flex xs12 sm2 md2>
          <v-img
            :src="require(`@/assets/img/abilityIcons/${ability[0]}.jpg`)"
            height="100%"
            :lazy-src="require(`@/assets/img/hero-placeholder.jpg`)">
          </v-img>
        </v-flex>
        <!-- SPELL INFORMATION -->
        <v-flex xs12 sm10 md10>
          <v-layout row wrap fill-height>
            <v-flex xs12 class="grey darken-3 pl-2 subheading" align-self-start>
              {{ability[1].dname.toUpperCase()}}
            </v-flex>
            <v-flex xs12 class="pl-2 pr-1">
              {{ability[1].desc}}
            </v-flex>
            <v-flex xs12 class="text-xs-right">
              <v-btn small round color="accent" @click="abilityDetails(ability[1])">
                <v-icon small left>fas fa-info-circle</v-icon>
                Details
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-dialog
        v-model="abilityDetailDialog"
        temporary
        max-width="500px"
        transition="dialog-transition"
      >
        <abilityDetailDialog
          :aDetails="abilityDetailsForDialog"
        >
        </abilityDetailDialog>
      </v-dialog>
    </v-card>
  </v-card>
</template>

<script>
import abilityDetailDialog from './abilityDetailDialog'
export default {
  components: {
    abilityDetailDialog
  },
  props: {
    heroAbilities: Array
  },
  mounted(){
    this.classifyAbilities()
  },
  data(){
    return{
      abilityDetailDialog: false,
      abilityDetailsForDialog: {},
      abilityDialogName: "",
      standardAbilities: [],
      talents: []
    }
  },
  methods:{
    abilityDetails(details){
      this.abilityDetailsForDialog  = details
      this.abilityDetailDialog      = !this.abilityDetailDialog
    },
    classifyAbilities(){
      this.heroAbilities.forEach(abil => {
        // console.log(abil)
        if (abil[0].includes('special')){
          this.talents.push(abil)
        }
        else{
          this.standardAbilities.push(abil)
        }
      })
    }
  }
}
</script>

<style lang="css">
.att{
  border-radius: 5px;
  background-color: #424242;
  height: 20px;
}
</style>
