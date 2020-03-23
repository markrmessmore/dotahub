<template>
  <v-container>
    <v-dialog
      v-model="getLoading"
      persistent :overlay="false"
      width="200"
      height="200"
    >
      <v-card color="accent3"
        width="200"
        height="200"
        dark
      >
        <v-container class="justify-center align-center" fill-height>
          <v-row class="pa-5">
            <v-img src="@/assets/logo-white.png" contain height="100" width="100"></v-img>
          </v-row>
          <v-row>
            <v-progress-linear
              indeterminate
              color="white"
              class="mr-1 ml-1"
            ></v-progress-linear>
          </v-row>
          <v-row class="justify-center">
            LOADING...
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    computed: {
      getLoading(){
        return this.$store.getters.getLoading
      }
    }
  }
</script>
