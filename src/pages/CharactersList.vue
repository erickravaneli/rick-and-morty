<script setup lang="ts">
import { useCharacters } from 'src/composables/useCharacters';
import CharacterCard from 'src/components/CharacterCard.vue';
import NavigationButtons from 'src/components/NavigationButtons.vue';
import SearchByName from 'src/components/SearchByName.vue';

const { characters, isLoading, error, prevPage, nextPage } = useCharacters();
</script>

<template>
  <q-page padding>
    <h2 class="text-h5 q-mb-md">Rick and Morty Characters</h2>

    <q-spinner v-if="isLoading && !characters.length" size="40px" color="primary" />

    <q-banner v-if="error" class="bg-red text-white q-mb-md">Error loading characters</q-banner>

    <search-by-name />

    <div class="cards-container">
      <div v-for="character in characters" :key="character.id">
        <character-card :character="character" />
      </div>
    </div>

    <navigation-buttons @prev-page="prevPage" @next-page="nextPage" />
  </q-page>
</template>

<style lang="scss">
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
}
</style>
