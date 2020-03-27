import  heroes  from '@/data/heroes.json'
import  items   from '@/data/items.json'

export default{
    heroData        : heroes,
    itemData        : heroes,
    excludedItems   : [
      "diffusal_blade_2",
      "dimensional_doorway"
    ],
    loading       : false
}