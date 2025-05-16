<script setup lang="ts">
import { useCharacters } from 'src/composables/useCharacters';
import { ref } from 'vue';

const { nameFilter, setNameFilter } = useCharacters();
const search = ref(nameFilter);
const onSearch = () => setNameFilter(search.value);
</script>

<template>
  <q-input
    v-model="search"
    debounce="500"
    placeholder="Search by name"
    outlined
    class="q-mb-md"
    @update:model-value="onSearch"
  />
</template>
