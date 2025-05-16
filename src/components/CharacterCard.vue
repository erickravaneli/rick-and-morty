<script setup lang="ts">
import type { Character } from 'src/models/character';

defineProps({
  character: {
    type: Object as () => Character,
    required: true,
  },
});
</script>

<template>
  <q-card
    class="q-mb-md cursor-pointer hover-card character-card"
    flat
    bordered
    @click="$router.push({ name: 'character-details', params: { id: character.id } })"
  >
    <q-img :src="character.image" :alt="character.name" ratio="1" class="rounded-top" />

    <q-card-section class="text-center">
      <div class="text-h6 text-primary q-mb-xs">{{ character.name }}</div>
      <div class="text-caption">Specie: {{ character.species }}</div>
      <div class="text-caption">Gender: {{ character.gender }}</div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.character-card {
  width: 250px;
}
.hover-card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  border-radius: 12px;
}
.hover-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}
.rounded-top {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
</style>
