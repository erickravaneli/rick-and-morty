<script setup lang="ts">
import { useCharacters } from 'src/composables/useCharacters';

const { currentPage, totalPages, isLoading } = useCharacters();
const emit = defineEmits(['nextPage', 'prevPage']);
</script>

<template>
  <div class="row q-mt-xl justify-center align-end q-gutter-lg">
    <q-btn
      label="Back"
      color="primary"
      :loading="isLoading"
      @click="emit('prevPage')"
      :disable="currentPage === 1"
    />
    <div class="text-subtitle2 self-center">Page {{ currentPage }} of {{ totalPages }}</div>
    <q-btn
      :loading="isLoading"
      label="Next"
      color="primary"
      @click="emit('nextPage')"
      :disable="currentPage === totalPages"
    />
  </div>
</template>
