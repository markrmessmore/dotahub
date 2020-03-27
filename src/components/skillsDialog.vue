<template>
    <v-dialog
      v-model="skillsDialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Here is the Deal...
        </v-card-title>

        <v-card-text>
          Valve does NOT make it easy to collect all the data for heroes, items, talents, etc for programmatic purposes. Sure, you can go on and SEE the specifics but retrieving this information without inputting every detail manually is not a concern to them. There is no API or simple config files to download and parse. Instead, data gets parsed from a variety of sources before I even pick it up. I do hope, in the future, to incorporate those elements as they are important in Dota decision making. However at this time it is simply not available.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="$emit('closeDialog')"
          >
            Got It!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        skillsDialog: Boolean
    }
}
</script>