export default {
  methods: {
    // ARMOR
    getHeroArmor(attr, agiGain, baseAgi, heroLvl, baseArmor) {
      let armorGrowth = 0
      if (attr === "agi") {
        armorGrowth = (baseAgi * .2) + ((agiGain * (heroLvl-1)) * .2)
      }
      else {
        armorGrowth = (baseAgi * .16) + ((agiGain * (heroLvl-1)) * .16)
      }
      return (baseArmor + armorGrowth).toFixed(1)
    },
    // MOVE SPEED
    getMoveSpeed(attr, agiGain, baseAgi, heroLvl, baseMS) {
      let speedGrowth = 0
      if (attr === "agi") {
        speedGrowth = ((baseAgi  + (agiGain * (heroLvl-1))) * .062)
      }
      else {
        speedGrowth = (baseAgi * .05) + ((agiGain * (heroLvl-1)) * .05)
      }
      return (baseMS + speedGrowth).toFixed(0)
    },
    // HP AND HP REGEN
    getHeroHP(attr, strGain, baseStr, heroLvl) {
      let strMult = 0
      if (attr === "str") {
        strMult = 22.5
      }
      else {
        strMult = 18
      }
      return Math.floor(((Math.floor(strGain * (heroLvl - 1)) + baseStr) * strMult)
       + 200)
    },
    getHPRegen(strGain, baseStr, heroLvl) {
      return ((baseStr + (strGain * heroLvl)) * .1).toFixed(1)
    },
    // MANA AND MANA REGEN
    getHeroMP(intGain, baseInt, heroLvl) {
      return ((((Math.floor(intGain * (heroLvl - 1))) + baseInt) * 12) + 75)
    },
    getManaRegen(intGain, baseInt, heroLvl) {
      return ((baseInt + (intGain * heroLvl)) * .05).toFixed(1)
    },
    getSpellAmp(attr, intGain, baseInt, heroLvl){
      let spellAmp = 0.0007
      if (attr === "int") {
        spellAmp = 0.000875
      }
      let result = (spellAmp * (baseInt + (intGain * heroLvl))) * 100
      return result.toFixed(2)
    },
    // DAMAGE
    getAttDmg(hero, heroLvl, damageCalc) {
      let statBonus = 0
      if (hero.primary_attr === "agi") {
        statBonus = hero.base_agi + (hero.agi_gain * (heroLvl - 1))
      }
      else if (hero.primary_attr === "str") {
        statBonus = hero.base_str + (hero.str_gain * (heroLvl -1 ))
      }
      else {
        statBonus = hero.base_int + (hero.int_gain * (heroLvl -1 ))
      }
      return (damageCalc + statBonus).toFixed(0)
    },
    // getHeroMPBonus(buildID, intGain, baseInt) {
    //   let itemInt       = this.inventoryBonuses[buildID -1].int
    //   let itemManaBonus = this.inventoryBonuses[buildID -1].mana
    //   let combinedInt   = itemInt + baseInt
    //   return (parseFloat(this.getHeroMP(intGain, combinedInt))) + itemManaBonus
    // },

    // getManaRegenBonus(buildID, baseManaRegen, baseInt, intGain) {
    //   let itemManaRegen = this.inventoryBonuses[buildID -1].manaRegen
    //   let itemInt       = this.inventoryBonuses[buildID -1].int
    //   let combinedInt   = itemInt + baseInt
    //   let combinedManaRegen = baseManaRegen + itemManaRegen
    //   return (parseFloat(this.getManaRegen(combinedManaRegen, combinedInt, intGain)))
    // },

  }
}
