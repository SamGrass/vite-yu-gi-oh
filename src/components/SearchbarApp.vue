<script>
import {store} from '../store.js'

export default {
    name: 'SearchbarApp',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div>
        <select v-model="store.archetypeActive" @change="$emit('selectArchetype')">
            <option value="none">-- None --</option>
            <option v-for="(archetype, index) in store.archetypeList" :key="index" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped> 
</style>