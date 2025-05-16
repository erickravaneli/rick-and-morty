import { computed, ref } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import GET_CHARACTERS from 'src/graphql/queries/getCharacters.gql';
import type { Character } from 'src/models/character';

const currentPage = ref(1);
const nameFilter = ref('');

export function useCharacters() {
  const { result, loading, error, refetch } = useQuery(GET_CHARACTERS, () => ({
    page: currentPage.value,
    name: nameFilter.value || undefined,
  }));

  const characters = computed<Character[]>(() => result.value?.characters?.results || []);
  const totalPages = computed<number>(() => result.value?.characters?.info?.pages || 1);

  const nextPage = async () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
      await refetch();
    }
  };

  const prevPage = async () => {
    if (currentPage.value > 1) {
      currentPage.value--;
      await refetch();
    }
  };

  const setNameFilter = async (newName: string) => {
    currentPage.value = 1;
    nameFilter.value = newName;
    await refetch();
  };

  return {
    characters,
    isLoading: loading,
    error,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    nameFilter,
    setNameFilter,
  };
}
