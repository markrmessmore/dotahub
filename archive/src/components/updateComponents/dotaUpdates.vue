<template lang="html">
  <v-layout row wrap>
    <v-flex xs12 sm10 offset-sm1 xl8 offset-xl2>
      <v-expansion-panel expand focusable>
        <v-expansion-panel-content lazy v-for="(update, i) in getUpdates" :key="i" :class="getColor(i)">
          <div slot="header" class="title">{{update.title}}</div>
          <v-card>
            <v-card-text>
              <v-card class="elevation-5">
                <v-container>
                  <h4 class="title">Gameplay Updates</h4>
                  <hr>
                  <br>
                  <ul>
                    <li v-for="(item, index) in update.general">{{item}}</li>
                  </ul>
                </v-container>
              </v-card>
              <br>
              <v-card class="elevation-5">
                <v-container>
                  <h4 class="title">Item Updates</h4>
                  <hr>
                  <br>
                  <li v-for="(item, index) in Object.entries(update.items)">
                    <b>{{item[0]}}</b>
                    <div class="">
                      <li v-for="changes in item[1]">- {{changes}}</li>
                    </div>
                    <br>
                  </li>
                </v-container>
              </v-card>
              <br>
              <v-card class="elevation-5">
                <v-container>
                  <h4 class="title">Hero Updates</h4>
                  <hr>
                  <br>
                  <li v-for="(hero, index) in Object.entries(update.heroes)">
                    <b>{{hero[0]}}</b>
                    <div>
                      <li v-for="changes in hero[1]">- {{changes}}</li>
                    </div>
                    <br>
                  </li>
                </v-container>
              </v-card>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  methods: {
    getColor(index) {
      if (index % 2 == 0 ) {
        return "accent white--text"
      }
      else {
        return
      }
    },
    getItems(){
      return this.$store.getters.getItems
    },
    getHeroes(){
      return this.$store.getters.getHeroes
    },
    getPatchNotes(){
      return this.$store.getters.getPatchNotes
    },
    checkEmpty(item){
      return (item == null || item.length === 0);
    }
  },
  computed: {
    getUpdates(){
      let itemList        = this.getItems()
      let updates         = Object.entries(this.getPatchNotes())
      let heroList        = this.getHeroes()
      let mappedUpdates   = []
      updates.forEach(patch => {
        let patchInfo     = {
          "title"         : "",
          "general"       : [],
          "items"         : {},
          "heroes"        : {}
        }
        // FORMAT TITLE
        patchInfo.title   = patch[0].split("_").join(".")
        // FORMAT GENERAL GAMEPLAY NOTES
        patch[1].general.forEach(item => {
          if (item != "<br>") {
            patchInfo.general.push(item)
          }
        })
        // FORMAT HERO CHANGES
        if (Object.keys(patch[1].heroes).length === 0) {
          return
        }
        else {
          Object.entries(patch[1].heroes).forEach(hero => {
            let heroShortName = hero[0]
            heroList.forEach(dotaHero => {
              if (dotaHero.name == heroShortName){
                patchInfo.heroes[dotaHero.localized_name] = hero[1]
              }
            })
          })
        }
        // FORMAT ITEM CHANGES
        Object.entries(patch[1].items).forEach(item => {
          if (this.checkEmpty(patch[1].items) === false) {
            if (Object.keys(patch[1].items).length === 0) {
              return
            }
            else {
              let itemShortName = item[0]
              itemList.forEach(dotaItem => {
                if (dotaItem[0] == itemShortName) {
                  patchInfo.items[dotaItem[1].dname] = item[1]
                }
              })
            }
          }
        })
        // SEND THIS PATCH TO THE ARRAY
        mappedUpdates.push(patchInfo)
      })
      return mappedUpdates.reverse()
    }
  }
}
</script>

<style lang="css">
</style>
