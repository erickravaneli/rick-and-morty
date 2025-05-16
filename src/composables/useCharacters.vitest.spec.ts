import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { Mock } from 'vitest';
import { ref } from 'vue';
import { useCharacters } from 'src/composables/useCharacters';
import { useQuery } from '@vue/apollo-composable';

vi.mock('@vue/apollo-composable');

describe('useCharacters', () => {
  const mockRefetch = vi.fn();
  const mockResult = ref({
    characters: {
      results: [
        { id: '1', name: 'Rick Sanchez' },
        { id: '2', name: 'Morty Smith' },
      ],
      info: {
        pages: 3,
      },
    },
  });

  beforeEach(() => {
    vi.clearAllMocks();
    (useQuery as unknown as Mock).mockReturnValue({
      result: mockResult,
      loading: ref(false),
      error: ref(null),
      refetch: mockRefetch,
    });
  });

  it('should return characters and pagination info', () => {
    const { characters, totalPages, isLoading, error } = useCharacters();

    expect(characters.value).toHaveLength(2);
    expect(totalPages.value).toBe(3);
    expect(isLoading.value).toBe(false);
    expect(error.value).toBe(null);
  });

  it('should go to the next page and call refetch', async () => {
    const { currentPage, nextPage } = useCharacters();

    expect(currentPage.value).toBe(1);
    await nextPage();
    expect(currentPage.value).toBe(2);
    expect(mockRefetch).toHaveBeenCalled();
  });

  it('should not go beyond total pages', async () => {
    const { currentPage, nextPage } = useCharacters();

    currentPage.value = 3;
    await nextPage();
    expect(currentPage.value).toBe(3);
    expect(mockRefetch).not.toHaveBeenCalled();
  });

  it('should go to the previous page and call refetch', async () => {
    const { currentPage, prevPage } = useCharacters();

    currentPage.value = 2;
    await prevPage();
    expect(currentPage.value).toBe(1);
    expect(mockRefetch).toHaveBeenCalled();
  });

  it('should not go below page 1', async () => {
    const { currentPage, prevPage } = useCharacters();

    currentPage.value = 1;
    await prevPage();
    expect(currentPage.value).toBe(1);
    expect(mockRefetch).not.toHaveBeenCalled();
  });

  it('should update name filter, reset page and refetch', async () => {
    const { nameFilter, currentPage, setNameFilter } = useCharacters();

    currentPage.value = 3;
    await setNameFilter('Summer');

    expect(nameFilter.value).toBe('Summer');
    expect(currentPage.value).toBe(1);
    expect(mockRefetch).toHaveBeenCalled();
  });
});
