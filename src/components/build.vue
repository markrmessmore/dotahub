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
                        <v-row no-gutters>
                            <v-col xs="12" md="4" offset-md="4">
                                <v-card outlined light @click="openDialog()" class="text-center">
                                    What about skills and talents?
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <heroList></heroList>
                </v-card>
            </v-col>
        </v-row>
        <skillsDialog :skillsDialog="skillsDialog" @closeDialog="closeDialog()"></skillsDialog>
    </v-container>
</template>

<script>
import heroList     from '@/components/buildComponents/heroList'
import skillsDialog from '@/components/skillsDialog'
export default {
    components: {
        heroList        : heroList,
        skillsDialog    : skillsDialog
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