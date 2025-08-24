import { useQuery } from '@tanstack/react-query';
import { getCurrentWeather } from '../api/weatherApi';

export function useCurrentWeather() {
  return useQuery({
    queryKey: ['weather', 'current'],
    queryFn: () => getCurrentWeather(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 2,
    retryDelay: 1000,
  });
}
