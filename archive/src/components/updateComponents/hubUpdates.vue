<template lang="html">
  <v-container fluid>
    <v-expansion-panel expand focusable>
      <v-expansion-panel-content lazy class="accent white--text">
        <div slot="header" class="title">November 11, 2018</div>
        <v-card>
          <v-card-text>
            <v-card class="elevation-5">
              <v-container>
                <h4 class="title">Intitial Release</h4>
                <hr>
                <br>
                <p class="subheading">
                  Welcome to <b>DotaHub!</b> More details and information coming soon!
                </p>
              </v-container>
            </v-card>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      pageTitle: "DotaHub Updates",
      pageIcon: "fas fa-home",
    }
  },
  methods: {
    getColor(index) {
      if (index % 2 == 0 ) {
        return "accent white--text"
      }
      else {
        return
      }
    },
  }
}
</script>

<style lang="css">
</style>
