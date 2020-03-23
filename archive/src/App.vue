<template>
  <v-app>
    <!-- NAV FOR LARGE SCREENS AND BIGGER -->
      <v-toolbar color="secondary" dense dark app clipped-left>
        <v-btn flat icon v-if="!checkScreenSize()" @click="navDrawer = !navDrawer">
          <v-icon>fas fa-bars</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <div class="myToolbar">
          <img src="@/assets/img/dotaLogo-white.png"
            height="30px" width="auto"
          ></img>
          <span class="headline pl-2">{{title}}</span>
        </div>
      </v-toolbar>
      <!-- NAVDRAWER SETTINGS BASED ON SCREEN SIZE -->
      <v-navigation-drawer  v-model="navDrawer" class="elevation-10" clipped :permanent="checkScreenSize()" app>
        <v-list>
          <v-list-tile v-for="item in navItems" :key="item.item" router :to="item.link" active-class="grey lighten-4 secondary--text">
            <v-list-tile-action>
              <v-icon left>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ item.item }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    <v-content>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm10 offset-sm1 lg8 offset-lg2>
            <transition
              name="fade"
              mode="out-in"
            >
              <router-view></router-view>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="secondary" dark app>
      <v-layout justify-center>
        Updated for 7.20e -- || -- Jan.7.2018  --  ||  --  &copy;DotaHub.US
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      navDrawer: true,
      title: "DotaHub"
    }
  },
  methods: {
    checkScreenSize(){
      if (this.$vuetify.breakpoint.mdAndUp === true) {
        return true
      }
      else {
        return false
      }
    }
  },
  computed: {
    navItems(){
      return this.$store.getters.getNavItems
    }
  }
}
</script>

<style>
.myToolbar {
  display: flex;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
