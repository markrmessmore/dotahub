<template lang="html">
  <v-container fluid>
    <v-card>
      <v-toolbar dark color="accent" class="headline">
        <v-icon class="pr-2">{{pageIcon}}</v-icon>
        {{pageTitle}}
      </v-toolbar>
      <v-card-text>
        <v-card color="accent" dark>
          <v-card-text class="body-1">
            Instructions to update DotaHub:
            <ol>
              <li>Select the feature you wish to update.</li>
              <li>Click the button on the specific area to update. This will take you to a source data file.</li>
              <li>Select all and copy the source data file.</li>
              <li>Select all and paste the source data over the existing data.</li>
              <li>Submit a pull request for this to be added to DotaHub.</li>
            </ol>
          </v-card-text>
        </v-card>
        <v-expansion-panel focusable class="mt-2 subheading">
          <v-expansion-panel-content>
            <div slot="header">Update Hero Data</div>
            <v-card>
              <v-card-text>
                <v-layout row wrap justify-center align-center>
                  <v-flex xs8>
                    Update heroAbilities.json
                  </v-flex>
                  <v-flex xs4 class="text-xs-left">
                    <v-btn color="secondary" small @click="link('abilities')">
                      <v-icon small left>fas fa-link</v-icon>
                      Get Abilities
                    </v-btn>
                  </v-flex>
                </v-layout>
                <hr>
                <v-layout row wrap justify-center align-center>
                  <v-flex xs8>
                    Update heroData.json
                  </v-flex>
                  <v-flex xs4 class="text-xs-left">
                    <v-btn color="secondary" small @click="link('heroes')">
                      <v-icon small left>fas fa-link</v-icon>
                      Get Hero Data
                    </v-btn>
                  </v-flex>
                </v-layout>
                <hr>
                <v-layout row wrap justify-center align-center>
                  <v-flex xs8>
                    Update heroLore.json
                  </v-flex>
                  <v-flex xs4 class="text-xs-left">
                    <v-btn color="secondary" small @click="link('lore')">
                      <v-icon small left>fas fa-link</v-icon>
                      Get Hero Lore
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content class="accent white--text">
            <div slot="header">Update Item Data</div>
            <v-card>
              <v-card-text>
                <v-layout row wrap justify-center align-center>
                  <v-flex xs8>
                    Update itemData.json
                  </v-flex>
                  <v-flex xs4 class="text-xs-left">
                    <v-btn color="secondary" small @click="link('items')">
                      <v-icon small left>fas fa-link</v-icon>
                      Get Item Data
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <div slot="header">Update Patch Notes</div>
            <v-card-text>
              <v-layout row wrap justify-center align-center>
                <v-flex xs8>
                  Update patchnotes.json
                </v-flex>
                <v-flex xs4 class="text-xs-left">
                  <v-btn color="secondary" small @click="link('notes')">
                    <v-icon small left>fas fa-link</v-icon>
                    Get Patch Notes
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      pageIcon: "far fa-file-code",
      pageTitle: "DotaHub Backend Utilities"
    }
  },
  methods:{
    link(item){
      let githubLinks = {
        notes     : "https://raw.githubusercontent.com/odota/dotaconstants/master/build/patchnotes.json",
        heroes    : "https://raw.githubusercontent.com/odota/dotaconstants/master/build/heroes.json",
        abilities : "https://raw.githubusercontent.com/odota/dotaconstants/master/build/abilities.json",
        lore      : "https://raw.githubusercontent.com/odota/dotaconstants/master/build/hero_lore.json",
        items     : "https://raw.githubusercontent.com/odota/dotaconstants/master/build/items.json"
      }
      window.open(githubLinks[item], '_blank')
    }
  }
}
</script>

<style lang="css">
</style>
