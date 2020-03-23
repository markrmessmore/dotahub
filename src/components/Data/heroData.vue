<template>
    <v-container>
        <v-row>
            <v-col xs="12" md="8" offset-md="2">
                <v-card outlined>
                    <v-card-title>
                        <v-icon left>fas fa-users</v-icon>
                        Parse New Hero Data
                    </v-card-title>
                    <v-card-text>
                        <v-row class="subtitle">
                            <v-col cols="12">Paste updated data from the OpenDota Github here to get an updated output file.</v-col>
                            <v-col cols="12">
                                Hero stat data can be found <a href="https://github.com/odota/dotaconstants/blob/master/build/heroes.json" target="_blank">here</a>.
                            </v-col>
                            <!-- <v-col cols="12">
                                Hero ability names can be found <a href="https://github.com/odota/dotaconstants/blob/master/build/abilities.json" target="_blank">here</a>.
                            </v-col> -->
                        </v-row>
                        <v-textarea outlined label="Paste Hero Stats" v-model="heroStats"></v-textarea>
                        <!-- <v-textarea outlined label="Paste Hero Ability Names" v-model="abilityData"></v-textarea> -->
                        <v-row align="center" justify="space-around">
                            <v-btn outlined @click="clear()">
                                <v-icon left>fas fa-times</v-icon>
                                Clear Data
                            </v-btn>
                            <v-btn outlined @click="create()">
                                <v-icon left>fas fa-sync</v-icon>
                                Create Data Files
                            </v-btn>
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
            // abilityData : "",
            heroStats   : ""
        }
    },
    methods: {
        clear(){
            // this.abilities = ""
            this.heroStats = ""
        },
        create(){
            this.$store.dispatch('setLoading', true)
            let stats       = Object.values(JSON.parse(this.heroStats))
            let heroData    = {}
            // let abilities   = JSON.parse(this.abilityData)
            stats.forEach(hero => {
                heroData[hero.localized_name] = {
                    agi_gain            : hero.agi_gain,
                    att                 : hero.primary_attr,
                    attack_range        : hero.attack_range,
                    attack_rate         : hero.attack_rate,
                    base_agi            : hero.base_agi,
                    base_armor          : hero.base_armor,
                    base_attack_min     : hero.base_attack_min,
                    base_attack_max     : hero.base_attack_max,
                    base_health         : hero.base_health,
                    base_health_regen   : hero.base_health_regen,
                    base_int            : hero.base_int,
                    base_mana           : hero.base_mana,
                    base_mana_regen     : hero.base_mana_regen,
                    base_magic_resist   : hero.base_mr,
                    base_str            : hero.base_str,
                    int_gain            : hero.int_gain,
                    str_gain            : hero.str_gain,
                    move_speed          : hero.move_speed,
                    name                : hero.name.split('npc_dota_hero_')[1],
                    projectile_speed    : hero.projectile_speed,
                    turn_rate           : hero.turn_rate
                }
            })
            this.$store.dispatch('setHeroData', heroData)
            this.$router.push('/Output')
        }
    }
}
</script>