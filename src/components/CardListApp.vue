<script>
import CardsApp from './CardsApp.vue'
// import store managment 
import { store } from '../store.js'
// import axios
import axios from 'axios';

export default {
    name: 'CardListApp',
    components: {
        CardsApp
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getCards() {
            axios.get(store.apiUrl).then(res => {
                console.log(res.data.data);
                store.cardList = res.data.data;

            })

        }
    },
    created() {
        this.getCards();
    },
}
</script>

<template>
    <main>
        <div class="container">
            <!-- componente searchbar da aggiungere in futuro -->
            afawfaf
            <!-- card list -->
            <div class="bg-white">
                <div class="cards-found">Trovate tot carte</div>

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