<script>
import CardsApp from './CardsApp.vue'

export default {
    name: 'CardListApp'
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
            gap: 1.5rem;

        }
    }
}
</style>