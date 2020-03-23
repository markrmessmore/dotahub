<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      flat
    >
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer" class="title">
          <img src="@/assets/logo-white.png" height="15" width="15">
          DotaHub.us
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/About">About</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
      <loading></loading>
    </v-content>
  </v-app>
</template>

<script>
import loading from '@/components/loading.vue'

export default {
  name: 'App',

  components: {
    loading: loading
  },

  data: () => ({
    //
  }),
  computed: {
    
  }
};
</script>
