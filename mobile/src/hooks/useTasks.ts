import { useQuery } from '@tanstack/react-query';

import { tasksService } from '../services/tasksService';

export function useTasks() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: tasksService.fetchTasks,
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
    retry: 2,
  });
}
