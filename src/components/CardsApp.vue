<script>
export default {
    name: 'CardsApp',
    props: ['info']
}
</script>

<template>
    <div class="card">
        <img :src="info.card_images[0].image_url_small" :alt="info.name">
        <div class="txt-card-container">
            <h4>{{ info.name }}</h4>
            <div>{{ info.archetype }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
    flex-basis: calc(100% / 5 - 1rem);

    img {
        display: block;
    }

    .txt-card-container {
        padding: 1rem;
        background-color: $primary;
        min-height: 6rem;
        

        h4 {
            color: #fff;
        }
    }
}
</style>