<template>
    <v-container>
        <v-row>
            <v-col xs="12">
                <v-card outlined>
                    <v-toolbar color="accent3" dark flat>
                        <v-toolbar-title>
                            <v-icon left>fas fa-play-circle</v-icon>
                            Begin Your Build
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text class="subtitle-1">
                        <v-row>
                            <v-col cols="12">
                                <div>Step 1: Select a hero</div>
                                <div>Step 2: Select items</div>
                                <div>Step 3: Set the hero level</div>
                                <div>Step 4: See how you like the build.</div>                                
                            </v-col>
                            <v-col xs="12" md="4" offset-md="4">
                                <v-btn block color="accent3" outlined light @click="openDialog()">What about skills and the talents?</v-btn>
                            </v-col>
                        </v-row>
                        <v-row class="secondary">
                            <v-col cols="12" class="title">
                                Select a Hero
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <skillsDialog :skillsDialog="skillsDialog" @closeDialog="closeDialog()"></skillsDialog>
    </v-container>
</template>

<script>
import skillsDialog from '@/components/skillsDialog'
export default {
    components: {
        skillsDialog: skillsDialog
    },
    data(){
        return{
            skillsDialog: false
        }
    },
    methods: {
        closeDialog(){
            this.skillsDialog = false
        },
        openDialog(){
            this.skillsDialog = true
        }
    }
    
}
</script>