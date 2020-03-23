import Vue from 'vue'
import Vuex from 'vuex'

// IMPORT JSON FILES
import * as patchNotes  from './assets/json/patchnotes.json'
import * as itemData    from './assets/json/itemData.json'
import * as heroData    from './assets/json/heroData.json'
import * as heroLore    from './assets/json/heroLore.json'
import * as heroAbilities from './assets/json/heroAbilities.json'

Vue.use(Vuex)

export default new Vuex.Store({
  // IF ITEMS ARE IN FILES FOR SEASONAL EVENTS OR REMOVED ENTIRELY, FILTER THEM HERE
  state: {
    filterTerms: ['Recipe', 'Poor', 'Pocket', 'River', 'Talon', 'Super', 'Aegis', 'Cheese', 'Tombstone', 'undefined', 'Diffusal Blade 2', "Trident", "Combo Breaker", "Aquila"],
    filterAbilities: ['antimage_spell_shield', 'centaur_khan_endurance_aura', 'centaur_khan_war_stomp', 'beastmaster_call_of_the_wild', 'beastmaster_hawk_invisibility','beastmaster_greater_boar_poison', 'brewmaster_drunken_haze', 'chen_test_of_faith_teleport', 'chen_test_of_faith', 'clinkz_death_pact', 'dazzle_weave', 'death_prophet_witchcraft','doom_bringer_empty1', 'doom_bringer_empty2', 'dragon_knight_frost_breath', 'faceless_void_backtrack', 'huskar_inner_vitality', 'invoker_empty1', 'invoker_empty2', 'invoker_attribute_bonus', 'keeper_of_the_light_empty1', 'keeper_of_the_light_empty2', 'keeper_of_the_light_spirit_form_illuminate', 'keeper_of_the_light_spirit_form_illuminate_end','keeper_of_the_light_recall','keeper_of_the_light_mana_leak','keeper_of_the_light_spirit_form','lich_dark_sorcery','lich_frost_aura','lich_frost_armor', 'life_stealer_empty_1', 'life_stealer_empty_2','life_stealer_empty_3','life_stealer_empty_4', 'lone_druid_savage_roar_bear','meepo_geostrike', 'monkey_king_primal_spring_early','morphling_morph', 'morphling_hybrid', 'necrolyte_sadist_stop', 'ogre_magi_frost_armor','omniknight_pacify','obsidian_destroyer_essence_aura', 'pangolier_heartpiercer','rubick_hidden1','rubick_hidden2','rubick_hidden3','rubick_null_field','rubick_empty1','rubick_empty2','spirit_breaker_empowering_haste','tusk_ice_shards_stop', 'tusk_launch_snowball', 'tusk_frozen_sigil','undying_tombstone_zombie_aura', 'undying_tombstone_zombie_deathstrike'],
    patchNotes: patchNotes,
    itemData  : itemData,
    heroData  : heroData,
    heroLore  : heroLore,
    heroAbilities: heroAbilities,
    navItems  : [
      {
        item: "Home",
        icon: "fas fa-home",
        link: "/",
        color: "#353535"
      },
      {
        item: "Heroes",
        icon: "fas fa-users",
        link: "/heroes",
        color: "#3C6E71"
      },
      {
        item: "Items",
        icon: "fas fa-cart-plus",
        link: "/items",
        color: "#7D98A1"
      },
      // {
      //   item: "Hero Builds",
      //   icon: "fas fa-cogs",
      //   link: "/builds",
      //   color: "#667761"
      // },
      {
        item: "Updates",
        icon: "fas fa-sync",
        link: "/updates",
        color: "#667761"
      },
      {
        item: "About",
        icon: "fas fa-question-circle",
        link: "/about",
        color: "#96adc8"
      },
      {
        item: "More Features to be added!",
        icon: "fas fa-cogs",
        link: "/roadmap",
        color: ""
      }
    ]
  },
  mutations: {
    setItems(state, payload){
      state.itemList = payload
    },
    setHeroes(state, payload){
      state.heroList = payload
    }
  },
  actions: {

  },
  getters: {
    getPatchNotes(state){
      return state.patchNotes.default
    },
    getHeroes(state) {
      let allHeroes = Object.entries(state.heroData.default)
      let remappedHeroes = []
      allHeroes.forEach(hero => {
        let heroInfo  = Object.assign({}, hero[1])
        let rename    = heroInfo.name.split("_")
        heroInfo.name = rename.slice(3).join("_")
        remappedHeroes.push(heroInfo)
      })
      return remappedHeroes.sort((heroA, heroB) => {
        if (heroA.localized_name > heroB.localized_name){
          return 1
        }
        else {
          return -1
        }
      })
    },
    getItems(state, getters){
      // GET THE ITEMS
      let allItems = state.itemData.default

      // PROCESS THROUGH ALL ITEMS IN THE LIST AND SEE IF ANY MATCH THE SET LIST TO BE FILTERED OUT
      function filterItems() {
        let filteredItems   = []
        let remappedItems   = []
        Object.entries(allItems).forEach(item => {
          if (checkFilterList(item) == true){
            return
          }
          else {
            //CHANGE THE DAGON & NECROBOOK CAPTIONS
            if (item[0].includes("dagon") || item[0].includes("necro")){
              remappedItems.push(mapItems(item))
            }
            else {
              if (item.length != 0){
                filteredItems.push(item)
              }
            }
          }
        })
        return filteredItems.concat(remappedItems)
      }
      //RE-MAP Dagon
      function mapItems (item){
        if (item.length == 0){
          return
        }
        else {
          // GET THE ITEM'S POSITION
          let index         = item[0].split("_")[1]  ? (item[0].split("_")[1]-1) : 0

          if (item[0].includes("dagon")) {
            //DAGON VALUES
            let dagonName     = ["Dagon 1", "Dagon 2", "Dagon 3", "Dagon 4", "Dagon 5"]
            let dagonBurst    = [400, 500, 600, 700, 800]
            let dagonInt      = [15, 18, 21, 24, 27]
            let dagonRange    = [600, 650, 700, 750, 800]
            let dagonDesc     = `Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.\n\nDamage: ${dagonBurst[index]}\nRange: ${dagonRange[index]}.`

            //CHANGING DAGON ATTRIBUTES
            item[1].active[0].desc  = dagonDesc
            item[1].dname           = dagonName[index]
            item[1].attrib[0].value = dagonInt[index]
          }
          if (item[0].includes("necro")){
            //NECROBOOK VALUES
            let necroName       = ['Necronomicon 1', 'Necronomicon 2', 'Necronomicon 3']
            let necroHealth     = [700, 800, 900]
            let necroStr        = [10, 15, 20]
            let necroInt        = [1, 1.25, 1.5]
            let warriorDmg      = [75, 100, 125]
            let warriorManaBrk  = [30, 40, 50]
            let warriorLastWill = [550, 675, 800]
            let archerDmg       = [60, 90, 120]
            let archerAura      = [5, 7, 9]
            let necroDesc       =
            `Summons a Warrior and an Archer to fight for you for 60 seconds.<br><br>
            <u>Warrior</u>: <i>Burns mana every hit, and deals magical damage to whoever kills it. Gains True Sight at level 3.<br>
            <li><u>Health</u>: ${necroHealth[index]}</li>
            <li><u>Damage</u>: ${warriorDmg[index]}</li>
            <li><u>Mana Break Damage</u>: ${warriorManaBrk[index]}</li>
            <li><u>Last Will Damage</u>: ${warriorLastWill[index]}</li>
            <br>
            <u>Archer:</u> Has a passive movement and attack speed aura. Gains Purge at Level 3.
            <li><u>Health</u>: ${necroHealth[index]}</li>
            <li><u>Damage</u>: ${archerDmg[index]}</li>
            <li><u>Aura Move Speed</u>: ${archerAura[index]}</li>
            <li><u>Aura Attack Speed</u>: ${archerAura[index]}</li>
            <li><u>Aura Radius</u>: 900</li>`

            //CHANGE NECROBOOK ATTRIBUTES
            item[1].dname           = necroName[index]
            item[1].active[0].desc  = necroDesc
            item[1].attrib[0].value = necroStr[index]
            item[1].attrib[1].value = necroInt[index]
          }
        }
        return item
      }

      // THE FUNCTION THAT CHECKS AGAINS THE LIST TO FILTER OUT
      function checkFilterList (item) {
        for (let i=0; i<state.filterTerms.length; i++){
          let checkTerm = state.filterTerms[i].toLowerCase().split(" ").join("_")
          if (item[0].includes(checkTerm)){
            return true
            break
          }
        }
      }
      // SORT THE RESULTS
      function sortList(){
        let sortedItems = {}
        let filterResults = filterItems()
        return filterResults.sort((a, b) => {
          if (a[1].dname > b[1].dname) {
            return 1
          }
          else {
            return -1
          }
        })
      }
      return sortList()
    },
    getHeroLore(state){
      return state.heroLore.default
    },
    getHeroAbilities(state){
      let abilities       = state.heroAbilities.default
      let removeList      = state.filterAbilities
      removeList.forEach(rm => {
        delete abilities[rm]
      })
      return abilities
    },
    getNavItems(state) {
      return state.navItems
    },
  }
})
