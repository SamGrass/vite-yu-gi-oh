<script>
import CardsApp from './CardsApp.vue';
import SearchbarApp from './SearchbarApp.vue';
// import store managment 
import { store } from '../store.js';
// import axios
import axios from 'axios';


export default {
    name: 'CardListApp',
    components: {
        CardsApp,
        SearchbarApp
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getCards() {
            let endPoint = store.apiUrl;

            if (store.archetypeActive !== 'none') {
                endPoint += `&archetype=${store.archetypeActive}`
            }
            axios.get(endPoint).then(res => {
                console.log(res.data.data);
                store.cardList = res.data.data;

            })
        },
        getArchetype() {
            axios.get(store.apiUrlArchetype).then(res => {
                console.log(res.data)
                store.archetypeList = res.data;
            })
        }
    },
    created() {
        this.getCards();
        this.getArchetype();
    },
}
</script>

<template>
    <main>
        <div class="container">
            <!-- componente searchbar da aggiungere in futuro -->
            <SearchbarApp @selectArchetype="getCards"/>
            <!-- card list -->
            <div class="bg-white">
                <div class="cards-found">Trovate {{store.cardList.length}} carte</div>

                <div class="cards-container">
                    <!-- componente CardsApp da aggiungere -->
                    <CardsApp v-for="(card, index) in store.cardList" :key="index" :info="card"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

main {
    background-color: $primary;
    padding: 2rem 0;

    .bg-white {
        background-color: #fff;
        padding: 2rem;
        margin-top: 1rem;

        .cards-found {
            background-color: #212529;
            padding: 0.5rem;
            color: #fff;
        }

        .cards-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem;

        }
    }
}
</style>