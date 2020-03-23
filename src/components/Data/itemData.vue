<template>
    <v-container>
        <v-row>
            <v-col xs="12" md="8" offset-md="2">
                <v-card outlined>
                    <v-card-title>
                        <v-icon left>fas fa-tools</v-icon>
                        Parse New Item Data
                    </v-card-title>
                    <v-card-text>
                        <v-row class="subtitle">
                            <v-col cols="12">Paste updated data from the OpenDota Github here to get an updated output file.</v-col>
                            <v-col cols="12">
                                Item data can be found <a href="https://github.com/odota/dotaconstants/blob/master/build/items.json" target="_blank">here</a>.
                            </v-col>
                        </v-row>
                        <v-textarea outlined label="Paste Item Data" v-model="itemData"></v-textarea>
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
            itemData   : ""
        }
    },
    computed: {
        getExcludedItems(){
            return this.$store.getters.getExcludedItems
        }
    },
    methods: {
        clear(){
            this.itemData = ""
        },
        create(){
            let items       = Object.entries(JSON.parse(this.itemData))
            let itemList    = {}
            this.$store.dispatch('setLoading', true)
            items.forEach(item => {
                // IGNORE UNDEFINED ITEMS
                if (this.getExcludedItems.includes(item[0])){
                    return
                }
                else {
                    itemList[item[1].dname] = {
                        active      : {
                                        name    : item[1].active ? item[1].active[0].name : "",
                                        desc    : item[1].active ? item[1].active[0].desc : ""
                                    },
                        attrib      : {},
                        cost        : item[1].cost,
                        gameName    : item[0],
                        passive     :{} 
                    }
                    if (item[1].attrib.length > 0){
                        item[1].attrib.forEach(att => {
                            itemList[item[1].dname].attrib[att.key] = att.value
                        })
                    }
                    if (item[1].passive){
                        item[1].passive.forEach(att => {
                            itemList[item[1].dname].passive[att.name] = att.desc
                        })
                    }
                }
            })
            this.$store.dispatch('setItemData', itemList)
            this.$router.push('/Output')
        }
    }
}
</script>