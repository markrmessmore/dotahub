<template lang="html">
  <v-card>
    <v-toolbar dark color="accent2" class="headline">
      <v-btn outline :to="{name: 'items'}">
          <v-icon left>fas fa-long-arrow-alt-left</v-icon>
          Back
      </v-btn>
      <v-spacer></v-spacer>
      {{item[1].dname}}
    </v-toolbar>
    <br>
    <v-card-text>
      <v-card color="primary white--text">
        <v-container grid-list-md fluid>
          <v-layout align-center justify-center row wrap fill-height class="primary white--text subheading text-xs-center">
            <v-flex xs12 sm3>
              <v-img :src="require(`@/assets/img/items/${item[0]}.jpg`)"></v-img>
            </v-flex>
            <v-flex xs12 sm9 class="subheading">
              <i v-if="item[1].lore">{{item[1].lore}}</i>
              <i v-else v-html="loreOutrage"></i>
              <br>
              <br>
              <hr class="accent2">
              <br>
              <!-- MANA, COOLDOWN AND COST -->
              <v-layout row wrap>
                <v-flex xs3 offset-xs1 class="primary lighten-1 text-xs-center attBar mr-2">
                  <v-tooltip top>
                    <span slot="activator">
                      <v-icon color="#f4d768" class="pr-2 pl-2">fas fa-coins</v-icon>&nbsp;{{item[1].cost}}
                    </span>
                    <span>Item Cost</span>
                  </v-tooltip>
                </v-flex>
                <v-flex xs3 class="primary lighten-1 text-xs-center attBar mr-2">
                  <v-tooltip top>
                    <span slot="activator">
                      <v-icon color="#00aad4" class="pr-2 pl-2">fas fa-square</v-icon>&nbsp;{{checkValue(item[1].mc)}}
                    </span>
                    <span>Mana Cost</span>
                  </v-tooltip>
                </v-flex>
                <v-flex xs3 class="primary lighten-1 text-xs-center attBar">
                  <v-tooltip top>
                    <span slot="activator">
                      <v-icon color="#666666" class="pr-2 pl-2">fas fa-clock</v-icon>&nbsp;{{checkValue(item[1].cd)}}
                    </span>
                    <span>Cooldown</span>
                  </v-tooltip>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
          <br>
          <!-- LINE FOR COMPONENTS -->
          <!-- <v-layout align-center justify-center row wrap fill-height v-if="item[1].created"
            class="secondary white--text subheading text-xs-center">
            {{item[1].components}}
          </v-layout> -->
        </v-container>
      </v-card>
      <!-- LINE FOR ACTIVES OR TOGGLES -->
      <v-card color="secondary" dark v-if="checkSection(['toggle', 'active', 'use'])">
        <v-card-text>
          <template v-if="item[1].use">
            <div class="title">{{item[1].use[0].name}}:</div>
            <div class="subheading"><i>{{item[1].use[0].desc}}</i></div>
          </template>
          <template v-if="item[1].toggle">
            <div class="title">{{item[1].toggle[0].name}}:</div>
            <div class="subheading"><i>{{item[1].toggle[0].desc}}</i></div>
          </template>
          <template v-if="item[1].active">
            <div class="title">{{item[1].active[0].name}}:</div>
            <div class="subheading" v-html="item[1].active[0].desc"></div>
          </template>
        </v-card-text>
      </v-card>
      <!-- NOTES CARD -->
      <v-card color="primary" dark v-if="checkSection(['notes'])">
        <v-card-text>
          <div class="title">Notes:</div>
          <div class="subheading"><i>{{item[1].notes}}</i></div>
        </v-card-text>
      </v-card>
      <!-- CARD FOR PASSIVES -->
      <v-card color="accent" dark v-if="checkSection(['passive'])">
        <v-card-text>
          <div class="title">Passive:</div>
          <div class="subheading"><u>{{item[1].passive[0].name}}</u>:&nbsp;<i>{{item[1].passive[0].desc}}</i></div>
        </v-card-text>
      </v-card>
      <!-- CARD FOR ATTRIBUTES -->
      <v-card color="accent4" dark v-if="item[1].attrib[0]">
        <v-card-text>
          <div class="title">Attribute Bonuses:</div>
          <div class="subheading" v-for="attr in item[1].attrib">
            <li>
              <u>{{attr.footer ? attr.footer : attr.header}}</u>:&nbsp;<i>+ {{attr.value}}</i>
            </li>
          </div>
        </v-card-text>
      </v-card>
    </v-card-text>
    <br>
    <!-- BOTTOM TOOL BAR -->
    <v-toolbar dark color="accent2" class="headline">
      <v-btn outline :to="{name: 'items'}">
          <v-icon left>fas fa-long-arrow-alt-left</v-icon>
          Back
      </v-btn>
      <v-spacer></v-spacer>
      {{item[1].dname}}
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  created(){
    if (!this.incomingItem) {
      let url = window.window.location.href.split("/")
      let selectedItem = url[url.length -1]
      this.getItemInfo(selectedItem)
    }
  },
  props: {
    incomingItem: Array,
  },
  data(){
    return {
      item : this.incomingItem,
      loreOutrage: "Can you believe IceFrog didn't give this item lore???<br>Tweet <a href='https://twitter.com/SirActionSlacks' target='_blank' class='white--text'>@SirActionSlacks</a> to complain!"
    }
  },
  methods: {
    checkValue(value){
      if (value == false) {
        return "n/a"
      }
      else {
        return value
      }
    },
    checkSection(sections){
      for (let i=0; i<sections.length; i++){
        if (this.item[1][sections[i]]) {
          return true
        }
      }
    },
    getItemInfo(selectedItem){
      let allItems = this.$store.getters.getItems
      allItems.filter(item => {
        if (item[0] == selectedItem) {
          this.item = item
        }
      })
    }
  },
  computed: {

  }
}
</script>

<style scoped>
.attBar{
  border-radius: 5px;
  height: 30px;
}
</style>
