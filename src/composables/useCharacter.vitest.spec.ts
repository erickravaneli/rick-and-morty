import { describe, it, expect, vi } from 'vitest';
import type { Mock } from 'vitest';
import { useCharacter } from 'src/composables/useCharacter';
import { useQuery } from '@vue/apollo-composable';
import { ref } from 'vue';

vi.mock('@vue/apollo-composable', () => ({
  useQuery: vi.fn(),
}));

describe('useCharacter', () => {
  it('should return character data correctly', () => {
    const mockResult = ref({ name: 'Rick Sanchez' });
    const mockLoading = ref(false);
    const mockError = ref(null);

    (useQuery as unknown as Mock).mockReturnValue({
      result: mockResult,
      loading: mockLoading,
      error: mockError,
    });

    const { character, isLoading, error } = useCharacter('1');

    expect(character.value).toEqual({ name: 'Rick Sanchez' });
    expect(isLoading.value).toBe(false);
    expect(error.value).toBe(null);
    expect(useQuery).toHaveBeenCalledWith(expect.anything(), { id: '1' });
  });

  it('should handle loading and error states', () => {
    const mockResult = ref(null);
    const mockLoading = ref(true);
    const mockError = ref('Some error');

    (useQuery as unknown as Mock).mockReturnValue({
      result: mockResult,
      loading: mockLoading,
      error: mockError,
    });

    const { character, isLoading, error } = useCharacter('999');

    expect(character.value).toBe(null);
    expect(isLoading.value).toBe(true);
    expect(error.value).toBe('Some error');
  });
});
