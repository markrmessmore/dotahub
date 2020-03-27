<template>
    <v-container>
        <v-row>
            <v-col xs="12">
                <v-card outlined>
                    <v-toolbar color="primary" flat dense>
                        <v-toolbar-title>
                            <v-icon left>far fa-check-circle</v-icon>
                            Step 1: Select a Hero
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-container class="subtitle-1" fluid>
                        <v-row dense>
                            <v-col xs='6' md="1" v-for="(hero, i) in getHeroList" :key="i" class="text-center">
                                <!-- {{hero}} -->
                                <v-img contain width="100" :src=require(`${getPic(hero)}`) lazy-src="@/assets/hero-placeholder.jpg"></v-img>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
        getPic(hero){
            let picUrl = `@/assets/heroes/${hero.dotaName}.jpg`
            if (picUrl){
                return require(picUrl)
            }
            else {
                return require('@/assets/hero-placeholder.jpg')
            }
        }
    },
    computed: {
        getHeroList(){
            let allHeroData = []
            
            Object.entries(this.$store.getters.getHeroData).forEach(hero => {
                    let heroInfo = {
                        dotaName    : hero[1].name,
                        name        : hero[0]
                    }
                    allHeroData.push(heroInfo)
            })
            return allHeroData.sort((a,b) => {
                if (a.name > b.name){
                    return 1
                }
                else {
                    return -1
                }
            })
        }
    }
    
}
</script>