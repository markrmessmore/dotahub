<template lang="html">
  <v-container fluid>
    <v-card>
      <v-toolbar dense dark color="accent2" class="headline">
        <v-icon class="pr-2">{{pageIcon}}</v-icon>
        {{pageTitle}}
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-text-field label="Item Search" clearable v-model="search" append-icon="fas fa-search"></v-text-field>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs4 sm2 v-for="(item, index) in filteredItems" :key="index">
            <v-card hover class="ma-1" height="140px" @click.native="showItemInfo(item)">
              <v-img :src="require(`@/assets/img/items/${item[0]}.jpg`)" contain :aspect-ratio="12/9"
                :lazy-src="require(`@/assets/img/item-placeholder.jpg`)"></v-img>
              <div class="subheading text-xs-center">{{item[1].dname}}</div>
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
      pageTitle: "Items",
      pageIcon: "fas fa-cart-plus",
      search: "",
      displayItemInfo: false,
      selectedItem: {},
      itemStats: []
    }
  },
  methods: {
    showItemInfo(selected){
      this.$router.push({name: 'itemInfo', params: {itemName: selected[0], incomingItem: selected}})
    }
  },
  computed: {
    filteredItems(){
      let filteredList = this.getItems
      if (this.search) {
        filteredList = this.getItems.filter(
          item => item[1].dname.toLowerCase().includes(this.search.toLowerCase())
        )
      }
      return filteredList
    },
    getItems(){
      return this.$store.getters.getItems
    }
  }
}
</script>
