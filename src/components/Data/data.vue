<template>
    <v-container>
        <v-row>
            <v-col xs="12" md="8" offset-md="2">
                <v-card outlined>
                    <v-card-title>
                        <v-icon left>fas fa-tools</v-icon>
                        DotaHub.us Data Tools
                    </v-card-title>
                    <v-container>
                        <v-row align="center" justify="space-around" no-gutters>
                            <v-card height="150px" width="150px" outlined ripple to="/HeroData">
                                <v-container fill-height>
                                    <v-row no-gutters>
                                        <v-col cols="12" class="text-center">
                                            <v-icon>fas fa-users</v-icon>
                                            <br>
                                            Heroes
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                            <v-card height="150px" width="150px" outlined ripple to="/ItemData">
                                <v-container fill-height>
                                    <v-row no-gutters>
                                        <v-col cols="12" class="text-center">
                                            <v-icon>fas fa-tools</v-icon>
                                            <br>
                                            Items
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
}
</script>