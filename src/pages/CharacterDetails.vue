<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCharacter } from 'src/composables/useCharacter';
import { computed } from 'vue';

const route = useRoute();
const { character: result, isLoading } = useCharacter(route.params.id as string);

const character = computed(() => result.value?.character ?? {});

function statusColor(status: string) {
  switch (status) {
    case 'Alive':
      return 'green';
    case 'Dead':
      return 'red';
    default:
      return 'grey';
  }
}
</script>

<template>
  <q-page class="q-pa-lg bg-grey-1">
    <q-btn
      icon="arrow_back"
      label="Back"
      color="primary"
      flat
      class="q-mb-md"
      @click="$router.back()"
    />

    <q-spinner v-if="isLoading" size="50px" color="primary" class="q-my-xl flex flex-center" />

    <q-card v-else class="q-pa-lg shadow-2 bg-white rounded-borders">
      <div class="row q-col-gutter-xl items-start">
        <div class="col-12 col-md-4">
          <q-img :src="character.image" class="rounded-borders" />
        </div>

        <div class="col-12 col-md-8">
          <h2 class="text-h4 text-primary q-mb-sm">{{ character.name }}</h2>
          <q-chip :color="statusColor(character.status)" text-color="white" class="q-mb-sm">
            {{ character.status }}
          </q-chip>
          <div class="text-body1 q-mb-xs"><strong>Specie:</strong> {{ character.species }}</div>
          <div class="text-body1 q-mb-xs"><strong>Gender:</strong> {{ character.gender }}</div>
          <div class="text-body1 q-mb-xs">
            <strong>Origin:</strong> {{ character.origin?.name }}
          </div>
          <div class="text-body1 q-mb-xs">
            <strong>Last location:</strong> {{ character.location?.name }}
          </div>
        </div>
      </div>

      <div class="q-mt-xl" style="max-height: calc(100vh - 350px); overflow-y: auto">
        <div class="text-subtitle1 q-mb-sm">Episodes</div>
        <q-card v-for="ep in character.episode" :key="ep.id" class="q-mb-sm q-pa-md shadow-1">
          <div class="text-subtitle2">{{ ep.episode }} - {{ ep.name }}</div>
          <div class="text-caption text-grey">{{ ep.air_date }}</div>
        </q-card>
      </div>
    </q-card>
  </q-page>
</template>

<style scoped>
.character-image {
  width: 100%;
  border-radius: 12px;
  max-height: 500px;
  object-fit: cover;
}
</style>
