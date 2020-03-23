<template>
    <v-container>
        <v-row>
            <v-col xs="12" md="8" offset-md="2">
                <v-card outlined>
                    <v-card-title>
                        <v-icon left>fas fa-file-import</v-icon>
                        Processed Output
                    </v-card-title>
                    <v-card-text>
                        <v-row class="subtitle">
                            <v-col cols="12">Here is the output you requested, formatted for DotaHub.</v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12">
                                <v-textarea outlined label="Processed Hero Data" v-model="heroData"></v-textarea>
                            </v-col>
                            <v-col cols="12" class="text-right">
                                <v-btn outlined @click="copyHeroData()">
                                    <v-icon left>far fa-copy</v-icon>
                                    Copy Hero Data
                                </v-btn>
                            </v-col>
                        </v-row>
                        <br>
                        <v-row no-gutters>
                            <v-col cols="12">
                                <v-textarea outlined label="Processed Item Data" v-model="itemData"></v-textarea>
                            </v-col>
                            <v-col cols="12" class="text-right">
                                <v-btn outlined @click="copyItemData()">
                                    <v-icon left>far fa-copy</v-icon>
                                    Copy Item Data
                                </v-btn>
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
    mounted(){
        this.heroData = this.getHeroData != null ? JSON.stringify(this.getHeroData) : ""
        this.itemData = this.getItemData != null ? JSON.stringify(this.getItemData) : ""
    },
    data(){
        return {
            heroData: null,
            itemData: null
        }
    },
    methods: {
        copyHeroData(){
            this.$copyText(this.heroData)
            .then(() => alert("Hero data has been copied to your clipboard."))
            .catch(() => alert("Something went wrong copying the hero data."))
        },
        copyItemData(){
            this.$copyText(this.itemData)
            .then(() => alert("Item data has been copied to your clipboard."))
            .catch(() => alert("Something went wrong copying the item data."))
        }
    },
    computed: {
        getHeroData(){
            return this.$store.getters.getHeroData
        },
        getItemData(){
            return this.$store.getters.getItemData
        }
    }
}
</script>