<script>
export default {
    name: 'CardsApp',
    props: {
        image: String,
        cardName: String,
        type: String
    }
}
</script>

<template>
    <div class="card">
        <img :src="image" :alt="cardName">
        <div class="txt-card-container">
            <h4>{{ cardName }}</h4>
            <div>{{ type }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
    flex-basis: calc(100% / 5 - 1rem);

    .txt-card-container {
        padding: 0.7rem;
        background-color: $primary;

        h4 {
            color: #fff;
        }
    }
}
</style>