import { useQuery } from '@vue/apollo-composable';
import GET_CHARACTER from 'src/graphql/queries/getCharacterById.gql';

export function useCharacter(id: string) {
  const { result, loading, error } = useQuery(GET_CHARACTER, { id });

  return {
    character: result,
    isLoading: loading,
    error,
  };
}
