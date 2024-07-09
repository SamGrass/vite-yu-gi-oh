<script>
export default {
    name: 'HeaderApp'
}
</script>

<template>
    <header>
        <a href="#" class="image-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/1200px-Yu-Gi-Oh%21_%28Logo%29.jpg"
                alt="logo">
        </a>
        <h1>Yu-Gi-Oh Api</h1>
    </header>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

header {
    padding: 1rem 2rem;
    @include flex-center();

    .image-container {
        display: inline-block;
        width: 200px;
    }
}
</style>