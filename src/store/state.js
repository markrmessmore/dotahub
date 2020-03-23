import  heroes  from '@/data/heroes.json'
import  items   from '@/data/items.json'

export default{
    heroes          : heroes,
    heroData        : null,
    items           : items,
    itemData        : null,
    excludedItems   : [
      "diffusal_blade_2",
      "dimensional_doorway"
    ],
    loading       : false
}