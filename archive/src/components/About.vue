<template lang="html">
  <v-container fluid>
    <v-card>
      <v-toolbar dense dark color="accent" class="headline">
        <v-icon class="pr-2">{{pageIcon}}</v-icon>
        {{pageTitle}}
      </v-toolbar>
      <v-card-text>
        <h3 class="headline">To give credit where it is due:</h3>
        <p class="subheading">
        This site is relying on some other resources foundational to the Dota2 community. All items, statistics, images, etc are available due to the <a href="https://creativecommons.org/licenses/by-sa/3.0/us/" target="_blank">Creative Common</a> license.
        </p>
      </v-card-text>
    </v-card>
    <br>
    <br>
    <v-card>
      <v-toolbar dense dark color="accent" class="headline">
        <v-icon class="pr-2">fas fa-user-astronaut</v-icon>
        Who is this guy?
      </v-toolbar>
      <v-card-text>
        <p class="subheading">
          Hi. I'm Elihu. I'm a hobbiest programmer - emphasis on the <b>HOBBY</b> part. I enjoy diving into things and learning. So in an effort to create something I thought would be valuable to the Dota 2 community, combined with my desire to practice learning <a href="http://vuejs.org" target="_blank">VueJS</a> and <a href="https://vuetifyjs.com/" target="_blank">Vuetify</a>...I made a thing.
        </p>
        <br>
        <h3 class="headline">Find something that has broken?</h3>
        <p class="subheading">
          Let me know by <a href="https://twitter.com/mmessmore" target="_blank">tweeting me here</a> and I'll take a look at it.
        </p>
      </v-card-text>
    </v-card>
    <br>
    <br>
    <v-card>
      <v-toolbar dense dark color="accent" class="headline">
        <v-icon class="pr-2">fab fa-github</v-icon>
        What to know more?
      </v-toolbar>
      <v-card-text>
        <h3 class="headline">Check out the Github repository!</h3>
        <p class="subheading">
          I'm happy to discuss features, respond to issues or review pull requests. You can find <a href="https://github.com/markrmessmore/dotahub" target="_blank">the github repo here.</a>
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      pageTitle: "About",
      pageIcon: "fas fa-question-circle"
    }
  },
  methods: {

  }
}
</script>

<style lang="css">
</style>
