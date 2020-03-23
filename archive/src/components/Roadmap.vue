<template lang="html">
  <v-container>
    <v-card>
      <v-toolbar dense dark color="accent" class="headline">
        <v-icon class="pr-2">{{pageIcon}}</v-icon>
        {{pageTitle}}
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text class="subheading">
        <v-layout row wrap>
          <v-flex xs12>
            The following is a 'to do' for DotaHub.
          </v-flex>
          <v-flex xs12>
            <ul>
              <li>Add Skill Trees to Hero Pages</li>
              <li>Ensure hero skills are displaying in correct order</li>
              <li>Verify formulas for all hero data values</li>
              <li>Complete a <b>Builds</b> page allowing users to test builds</li>
              <li>Add the ability to send a build to an email.</li>
            </ul>
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
      pageIcon: "far fa-map",
      pageTitle: "DotaHub Roadmap"
    }
  }
}
</script>

<style lang="css">
</style>
