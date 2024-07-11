import { reactive } from "vue";

export const store = reactive({
    cardList: [],
    archetypeList: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0',
    apiUrlArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypeActive: 'none'

})