<script>
import CardListApp from './components/CardListApp.vue'
import HeaderApp from './components/HeaderApp.vue'

export default {
  components: {
    CardListApp,
    HeaderApp
  }
}
</script>

<template>
  <HeaderApp />
  <main>
    <CardListApp />
  </main>



</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
