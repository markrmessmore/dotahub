<template>
    <v-container>
        <v-row>
            <v-col xs="12" md="8" offset-md="2">
                <v-card outlined>
                    <v-toolbar color="accent3" flat dark>
                        <v-toolbar-title>
                            <v-icon left>fas fa-user-astronaut</v-icon>
                            Welcome to DotaHub!
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text class="subtitle-1">
                        <v-row>
                            <v-col cols="12">
                                This is a site build to test builds for the video game Dota 2. It is a work in progress and I am a hobby coder so there may very well be bugs, just <a href="https://twitter.com/mmessmore" target="_blank" class="accent3--text">tweet me</a>  and I will have a look. Just click the card below to begin.
                            </v-col>
                            <v-col cols="12">
                                <v-row align="center" justify="space-around" no-gutters>
                                    <v-card v-for="(item, i) in navItems" :key="i" height="150px" width="150px" outlined ripple :to="item.link">
                                        <v-container fill-height>
                                            <v-row no-gutters>
                                                <v-col cols="12" class="text-center">
                                                    <v-icon>{{item.icon}}</v-icon>
                                                    <br>
                                                    {{item.title}}
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            navItems: [
                {
                    title   : "Begin Build",
                    icon    : "fas fa-play-circle",
                    link    : "/Build"
                },
                {
                    title   : "Roadmap",
                    icon    : "fas fa-map",
                    link    : "/Roadmap"
                }
            ]
        }
    }
}
</script>